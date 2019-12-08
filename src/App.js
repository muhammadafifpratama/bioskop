import React, { Component } from 'react';
import './App.css';
import kartu from "./component/kartu"
import rumah from "./page/home"
import Home from "./page/home"
import ButtonAppBar from "./component/navabar"
import login from "./page/login"
import daftar from "./page/register"
import forgotpassword from "./page/forgot"
import { Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Route path="/" component={props => <Home{...props} />} exact />
        <Route path="/forgot_password" component={forgotpassword} exact />
        <Route path="/home" component={rumah} exact />
        <Route path="/login" component={login} exact />
        <Route path="/daftar" component={daftar} exact />
      </div >
    );
  }
}

export default App;
