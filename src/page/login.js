import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link, Redirect } from 'react-router-dom'
import Axios from "axios"
import { connect } from "react-redux"
import { Login } from "../redux/action"

class Loginpage extends Component {
    state = {
        error: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginUser = () => {
        let username = this.username.value
        let password = this.password.value
        console.log(username)
        console.log(password)
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
                        console.log(res.data)
                        this.props.Login(res.data[0])
                        localStorage.setItem('username', res.data[0].username)
                        console.log(this.props.username)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        console.log(this.props.username)
        if (this.props.username) {
            return (
                <Redirect to='/'>

                </Redirect>
            )
        }
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
                        <TextField id="standard-basic" label="Username" inputRef={(username) => this.username = username} > </TextField>
                        <br></br>
                        <TextField id="standard-password-input" label="Password" type="password" inputRef={(password) => this.password = password}> </TextField>
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

const mapStatetoProps = ({ auth }) => {
    return {
        username: auth.username
    }
}

export default connect(mapStatetoProps, { Login })(Loginpage);