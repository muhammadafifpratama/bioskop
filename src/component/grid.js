import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function FullWidthGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Link to={`/movie-detail?id=${props.id}`}>
                        <Paper className={classes.paper}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={props.image} />
                            </ButtonBase>
                            {props.judul}
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
