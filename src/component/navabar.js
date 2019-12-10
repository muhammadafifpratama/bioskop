import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popover from '@material-ui/core/Popover';
import Link from '@material-ui/core/Link';
import { connect } from "react-redux";
import { Logout } from "../redux/action"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
//PERLU REDUX

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = (props) => {
    let { role } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    if (role === 'user') {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link href="/" color="inherit">Bioskop </Link>
                        </Typography>
                        <Button
                            color="inherit"
                            startIcon={<AccountCircleIcon />}
                            href="/profile">
                            {props.role} profile
                    </Button>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
    else if (role === 'admin') {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link href="/" color="inherit">Bioskop </Link>
                        </Typography>
                        <Button
                            color="inherit"
                            startIcon={<VpnKeyIcon />}
                            href="/admin">
                            manage Movies
                    </Button>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
    else {
        return (
            <div className={classes.root}>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Button variant="contained" href="/login">Login</Button>
                    <Button variant="contained" href="/daftar">Register</Button>
                </Popover>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>

                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                            <Link href="/" color="inherit">Bioskop </Link>
                        </Typography>

                        <Button color="inherit" href="/login">Login</Button>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}

const mapStatetoProps = ({ auth }) => {
    return {
        role: auth.role
    }
}

export default connect(mapStatetoProps, { Logout })(Navbar);

