import React, { Component } from 'react';
import Axios from "axios";
import { API_URL } from "../helper/API_URL";

class semuatransaksi extends Component {
    state = {
        data: [],
        nama: []
    }

    componentDidMount() {
        Axios.get(API_URL + "transaction")
            .then((res) => {
                let awal = res.data
                console.log(awal);
                awal.map((aaa) => {
                    return (
                        this.setState({ nama: aaa.nama })
                    )
                })
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    rendertransaksi = () => {
        let data = this.state.data
        let nama = this.state.nama
        console.log(nama)
        console.log(data)
        return data.map((val) => {
            console.log(val.data);
            console.log(val.nama);
            let maplagi = val.data
            return maplagi.map((val2) => {
                console.log(val2)
                return (
                    <div>
                        punya : {val.nama} <br></br>
                        {val2.name}<br></br>
                        {val2.totalPrice}<br></br>
                        {val2.ticketAmount}<br></br>
                        {val2.nomorkursi}<br></br>
                        <br></br>
                    </div>
                )
            })
        })
    }

    render() {
        return (<div>{this.rendertransaksi()}</div>);
    }
}

export default semuatransaksi;