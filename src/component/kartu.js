import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';

const Kartu = (props) => {
    return (

        <CardColumns>
            <Card>
                <Link to="/login">
                    <CardImg img src={props.image} alt='products' />
                </Link>
                <CardTitle>
                    {props.judul}
                </CardTitle>

            </Card>
        </CardColumns>

    );
}

export default Kartu