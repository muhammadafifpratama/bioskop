import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Axios from "axios"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from '../redux/action';
//masih ada bugnya userbaru belom dites cartnya

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            confirm: "",
            char: false,
            num: false,
            show: false,
            border: false,
            cart: []
        }
    }

    handleChange = (event) => {
        let pass = event.target.value
        let num = /[0-9]/
        // let spec = /[!@#$%^&*;]/
        this.setState({
            [event.target.name]: event.target.value,
            num: num.test(pass),
            // spec: spec.test(pass),
            char: pass.length > 8,
            border: (num.test(pass) && (pass.length > 8))
        },
            console.log(event.target.value)
        )
    }

    registerUser = () => {
        let { char, num, username, password, confirm, email, cart } = this.state
        let role = 'user';


        if (password !== confirm) {
            alert('passwordnya ga cocok silahkan dicek lagi')
        } else {
            Axios.get(`http://localhost:2000/users?username=${username}`)
                .then((res) => {
                    console.log(res.data[0])
                    if (res.data.length !== 0) {
                        alert('username has been taken')
                    } else {
                        if (char && num) {
                            Axios.post('http://localhost:2000/users', {
                                username,
                                password,
                                role,
                                email,
                                cart
                            })
                                .then((res) => {
                                    // this.props.Login(res.data[0])
                                    // localStorage.setItem('username', res.data[0].username)
                                })
                        } else {
                            alert('invalid password')
                        }
                    }
                })
        }
    }

    render() {
        // if (this.props.username) {
        //     return (
        //         <Redirect to='/'>

        //         </Redirect>
        //     )
        // }
        let { char, num, show } = this.state
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

                        {/* password harus memiliki angka tanda baca dan panjangnya harus 8 karakter atau lebih */}

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

const mapStatetoProps = ({ auth }) => {
    return {
        username: auth.username
    }
}

export default connect(mapStatetoProps, { Login })(Register)