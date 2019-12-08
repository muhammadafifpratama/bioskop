import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Axios from "axios"

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            confirm: "",
            char: false,
            spec: false,
            num: false,
            show: false,
            border: false
        }
    }

    handleChange = (event) => {
        let pass = event.target.value
        let num = /[0-9]/
        let spec = /[!@#$%^&*;]/
        this.setState({
            [event.target.name]: event.target.value,
            num: num.test(pass),
            spec: spec.test(pass),
            char: pass.length > 7,
            border: (num.test(pass) && spec.test(pass) && (pass.length > 7))
        },
            console.log(event.target.value)
        )
    }

    registerUser = () => {
        let { char, spec, num } = this.state
        let username = this.state.username;
        let password = this.state.password;
        let confirmPass = this.state.confirm;
        let email = this.state.email;
        let role = 'user';
        if (password !== confirmPass) {
            alert('passwordnya ga cocok silahkan dicek lagi')
        } else {
            Axios.get(`http://localhost:2000/users?username=${username}`)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.length !== 0) {
                        alert('username has been taken')
                    } else {
                        if (char && spec && num) {
                            Axios.post('http://localhost:2000/users', {
                                username,
                                password,
                                role,
                                email
                            })
                                .then((res) => {
                                    console.log(res.data)
                                })
                        } else {
                            alert('Please Fill the Password Requirements')
                        }
                    }
                })
        }
    }

    render() {
        let { char, spec, num, show, border } = this.state
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
                        <TextField id="standard-basic" label="Email" onChange={this.handleChange} name="email" value={this.state.email} />
                        <br></br>
                        <TextField id="standard-password-input" label="Password" type="password" onChange={this.handleChange} name="password" value={this.state.password} />
                        <br></br>
                        <TextField id="standard-password-input" label="confirm" type="password" onChange={this.handleChange} name="confirm" value={this.state.confirm} />
                        <br></br>
                        <Button variant="contained" color="secondary" style={{ minWidth: '185px' }} onClick={this.registerUser}>Register</Button>

                    </div>
                </Box >
                {
                    show
                        ?
                        <div>
                            {
                                char
                                    ?
                                    <div style={{ color: 'green' }}>
                                        Password length must be 8 or more Characters
                                        console.log("Password length must be 8 or more Characters")
                            </div>
                                    :
                                    <div style={{ color: 'red' }}>
                                        Password length must be 8 or more Characters
                            </div>
                            }
                            {
                                spec
                                    ?
                                    <div style={{ color: 'green' }}>
                                        Password must include special characters
                            </div>
                                    :
                                    <div style={{ color: 'red' }}>
                                        Password must include special characters
                            </div>
                            }
                            {
                                num
                                    ?
                                    <div style={{ color: 'green' }}>
                                        Password must include number
                            </div>
                                    :
                                    <div style={{ color: 'red' }}>
                                        Password must include number
                            </div>
                            }
                        </div>
                        :
                        null
                }
            </ div >
        )
    }
}

export default Register