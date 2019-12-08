import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import Axios from "axios"
import { Alert } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginUser = () => {
        let username = this.state.username;
        let password = this.state.password;
        console.log(password)
        console.log(username)
        if (username === '' || password === '') {
            alert('Fill in all the forms')
        } else {
            Axios.get(`http://localhost:2000/users?username=${username}&password=${password}`, {
                username,
                password
            })
                .then((res) => {
                    if (res.data.length === 0) {
                        alert('username or password invalid')
                    } else {
                        console.log("login sukses denngan username", username)
                        return (<div>
                            < Alert color="primary" >
                                This is a primary alert — check it out!
                            </Alert >
                        </div>
                        )
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        return (

            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box width={800} height={300} bgcolor="grey.300" p={1} my={0.5}>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <TextField id="standard-basic" label="Username" onChange={this.handleChange} name="username" value={this.state.username} />
                        <br></br>
                        <TextField id="standard-password-input" label="Password" type="password" onChange={this.handleChange} name="password" value={this.state.password} />
                        <br></br>
                        <Button variant="contained" color="secondary" style={{ minWidth: '185px' }} onClick={this.loginUser}>Login</Button>
                        <br></br><br></br>
                        <Link to="/forgot_password">
                            <center>Forgot Password?</center>
                        </Link>
                    </div>
                </Box >
            </ div >
        )
    }
}

export default Login