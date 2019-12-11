import React from 'react';
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

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));



const Profile = (props) => {
    let { Logout } = props;
    const classes = useStyles();

    const onBtnLogout = () => {
        Logout()
        localStorage.removeItem('username')
        alert("terlogout dengan sukses~")
        // < Redirect to = '/' >

        //     </Redirect >
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<ExitToAppIcon />}
                        onClick={onBtnLogout}>
                        Logout
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AccountBoxIcon />}
                        href='/ganti'>
                        Ganti Password
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AddBoxIcon />}
                        href="/order">
                        Pesan Tiket
                    </Button>
                </div>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </React.Fragment>
    );
}

const mapStatetoProps = ({ auth }) => {
    return {

    }
}

export default connect(mapStatetoProps, { Logout })(Profile);