import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from "../helper/API_URL";

class Transaksi extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        let username = localStorage.getItem('username')
        Axios.get(API_URL + `transaction?nama=${username}`)
            .then((res) => {
                console.log(res.data[0].data);

                this.setState({
                    data: res.data[0].data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    rendertransaksi = () => {
        let data = this.state.data
        return data.map((val) => {
            console.log(val);
            return (
                <div>
                    {val.name}<br></br>
                    {val.totalPrice}<br></br>
                    {val.ticketAmount}<br></br>
                    {val.nomorkursi}<br></br>
                    <br></br>
                </div>
            )
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                {this.rendertransaksi()}
            </div >);
    }
}

export default Transaksi;