import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Logout } from "../redux/action"
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from "../helper/API_URL";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SaveIcon from '@material-ui/icons/Save';

const onBtnLogout = () => {
    Logout()
    localStorage.removeItem('username')
    alert("terlogout dengan sukses~")
    // < Redirect to = '/' >

    //     </Redirect >
}



class Profile extends Component {

    state = {
        data: [],
        totalPrice: 0
    }

    componentDidMount() {
        let username = localStorage.getItem('username')
        Axios.get(API_URL + `users?username=${username}`)
            .then((res) => {
                this.setState({ data: res.data[0].cart })
                var jumlahsemua = res.data[0].cart[0].totalPrice
                var banyak = res.data[0].cart
                var i;
                var output = 0
                console.log(banyak.length)
                for (i = 0; i < banyak.length; i++) {
                    output += jumlahsemua
                }
                this.setState({
                    totalPrice: output
                })
                console.log(output);
                console.log(jumlahsemua);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    rendertiket = () => {
        let data = this.state.data
        let { totalPrice } = this.state
        return data.map((val) => {
            console.log(val.seats);

            return (
                <Paper>
                    <Grid container spacing={2} padding="10%">
                        <Grid item xs={4} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        movie name = {val.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        amount to be paid = Rp. {val.totalPrice.toLocaleString()}
                                    </Typography>
                                    kursi mana aja {val.seats}
                                </Grid>
                                <Button
                                    variant="contained"
                                    color="default"
                                    startIcon={<SaveIcon />}
                                >
                                    delete ticket
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                </Paper>
            )
        })
    }

    render() {
        console.log(this.state.totalPrice);

        return (

            <div>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<ExitToAppIcon />}
                        onClick={onBtnLogout}
                        href="/ ">
                        Logout
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<AccountBoxIcon />}
                        href='/ganti'>
                        Ganti Password
                    </Button>
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                        {this.rendertiket()}
                        <Grid item>
                            <br></br>
                            <Typography variant="body2" color="textSecondary">
                                total semua harga tiket adalah = Rp. {this.state.totalPrice.toLocaleString()}
                            </Typography>
                        </Grid>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<SaveIcon />}
                        >
                            checkout
                                </Button>
                    </Typography>
                </Container>
            </div >
        );
    }
}

const mapStatetoProps = ({ auth }) => {
    return {

    }
}

export default connect(mapStatetoProps, { Logout })(Profile);