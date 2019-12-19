import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from "../helper/API_URL";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { Logout } from "../redux/action"
import BlockIcon from '@material-ui/icons/Block';
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

class Transaksi extends Component {
    state = {
        data: [],
        openModal: false
    }

    componentDidMount() {


        let username = localStorage.getItem('username')
        Axios.get(API_URL + `transaction?nama=${username}`)
            .then((res) => {
                console.log(res.data);
                console.log(res.data[1].data);
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    rendermodal = () => {
        let { data } = this.state
        console.log(data);
        return data.map((val) => {
            console.log(val.data);
            let mapteros = val.data
            return mapteros.map((vala) => {
                console.log(vala)
                var kursi = vala.nomorkursi
                var tes = "";
                for (var i = 0; i < kursi.length; i++) {
                    tes += kursi[i] + ", "
                }
                return (
                    <TableRow>
                        <TableCell>
                            {val.id}
                        </TableCell>
                        <TableCell>
                            {vala.name}
                        </TableCell>
                        <TableCell>
                            {tes}
                        </TableCell>
                        <TableCell>
                            {val.totalPrice}
                        </TableCell>
                    </TableRow>
                )
            })
        })
    }


    rendertransaksi = () => {
        let { data } = this.state
        console.log(data);
        return data.map((val) => {
            console.log(val.data);
            let mapteros = val.data
            return mapteros.map((vala) => {
                console.log(vala)
                return (
                    <TableRow>
                        <TableCell>
                            {val.id}
                        </TableCell>
                        <TableCell>
                            {val.date}
                        </TableCell>
                        <TableCell>
                            {vala.ticketAmount}
                        </TableCell>
                        <TableCell>
                            {val.totalPrice}
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" onClick={() => this.setState({ openModal: true })}>Detail </Button>
                        </TableCell>
                    </TableRow>
                    // <div>
                    //     id = {val.id} <br></br>
                    //     date = {val.date} <br></br>
                    //     ticketAmount = {vala.ticketAmount} <br></br>
                    //     totalPrice = {val.totalPrice}
                    //     <Button variant="contained" onClick={() => this.setState({ openModal: true })}>Detail </Button>
                    // </div>
                )
            })
        })
    }

    render() {
        console.log(this.state.data);
        let { openModal } = this.state
        return (
            <div>
                <Modal isOpen={openModal}>
                    <ModalHeader>Transaction Detail</ModalHeader>
                    <ModalBody>
                        <Table>
                            <TableHead>
                                <TableCell>id</TableCell>
                                <TableCell>Movie Title</TableCell>
                                <TableCell>Seats</TableCell>
                                <TableCell>Price</TableCell>
                            </TableHead>
                            <TableBody>
                                {this.rendermodal()}
                            </TableBody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.setState({ openModal: false })}>Close</Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    <TableHead>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>ticketAmount</TableCell>
                        <TableCell>totalPrice</TableCell>
                        <TableCell>Action</TableCell>
                    </TableHead>
                    <TableBody>
                        {this.rendertransaksi()}
                    </TableBody>
                </Table>
            </div >);
    }
}

export default Transaksi;