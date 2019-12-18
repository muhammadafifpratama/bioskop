import React, { Component } from 'react';
import './App.css';
import rumah from "./page/home"
import ButtonAppBar from "./component/navabar"
import login from "./page/login"
import daftar from "./page/register"
import forgotpassword from "./page/forgot"
import isifilm from "./page/moviedetail"
import { Route, Switch } from "react-router-dom"
import Axios from "axios"
import { connect } from "react-redux"
import { Login } from "./redux/action"
import admin from "./page/admin"
import { API_URL } from './helper/API_URL';
import tombol from "./page/profile"
import order from "./page/pesenkursi"
import notfound from "./page/404"
import history from "./page/transaksi"


class App extends Component {
  componentDidMount() {
    let username = localStorage.getItem('username')
    if (username) {
      Axios.get(API_URL + `users?username=${username}`)
        .then((res) => {
          this.props.Login(res.data[0])
        })
    }
  }
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Switch>
          <Route path="/" component={rumah} exact />
          <Route path="/profile" component={tombol} />
          <Route path="/order" component={order} />
          <Route path="/admin" component={admin} />
          <Route path="/forgot_password" component={forgotpassword} />
          <Route path="/home" component={rumah} />
          <Route path="/login" component={login} />
          <Route path="/daftar" component={daftar} />
          <Route path="/movie-detail" component={isifilm} />
          <Route path="/transaction-history" component={history} />
          <Route path="*" component={notfound} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { Login })(App);
