import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardColumns } from 'reactstrap';

const Kartuasd = (props) => {
    return (
        <div className='col-4'>
            <CardColumns>
                <Card>
                    <Link to={`/movie-detail?id=${props.id}`}>
                        <CardImg img src={props.image} alt='products' />
                    </Link>
                    <CardTitle>
                        {props.judul}
                    </CardTitle>
                </Card>
            </CardColumns>
        </div>
    );
}

export default Kartuasd