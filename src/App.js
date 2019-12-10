import React, { Component } from 'react';
import './App.css';
import rumah from "./page/home"
import ButtonAppBar from "./component/navabar"
import login from "./page/login"
import daftar from "./page/register"
import forgotpassword from "./page/forgot"
import isifilm from "./page/moviedetail"
import { Route } from "react-router-dom"
import Axios from "axios"
import { connect } from "react-redux"
import { Login } from "./redux/action"
import admin from "./page/admin"

class App extends Component {
  componentDidMount() {
    let username = localStorage.getItem('username')
    if (username) {
      Axios.get(`localhost:2000/users?username=${username}`)
        .then((res) => {
          this.props.Login(res.data[0])
        })
    }
  }
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Route path="/" component={rumah} exact />
        <Route path="/admin" component={admin} exact />
        <Route path="/forgot_password" component={forgotpassword} exact />
        <Route path="/home" component={rumah} exact />
        <Route path="/login" component={login} exact />
        <Route path="/daftar" component={daftar} exact />
        <Route path="/movie-detail" component={isifilm} exact />
      </div >
    );
  }
}

export default connect(null, { Login })(App);
