import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from "../helper/API_URL";

class Transaksi extends Component {
    state = {
        data: [],
    }

    componentDidMount() {

    }

    rendertransaksi = () => {
        let username = localStorage.getItem('username')
        Axios.get(API_URL + `transaction?nama=${username}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.rendertransaksi()}
            </div>);
    }
}

export default Transaksi;