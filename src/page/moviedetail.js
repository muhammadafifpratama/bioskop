import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';

class MovieDetail extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        let id = this.props.location.search.split('=')[1];
        console.log(id)
        Axios.get(`http://localhost:2000/movies/${id}`)
            .then((res) => {
                this.setState({ data: res.data })
                console.log(this.state.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderGenreButton = () => {
        let { genre } = this.state.data;
        if (genre) {
            return genre.map((val, index) => {
                return <Button className='btn-custom' color='danger' key={index}>{val}</Button>
            })
        }
    }

    renderCasts = () => {
        let { casts } = this.state.data;
        if (casts) {
            return casts.map((val) => {
                return (
                    <div>
                        <h5>{val}</h5>
                    </div>
                )
            })
        }
    }

    render() {
        let { data } = this.state;
        if (data === []) {
            return (
                <div className='d-flex justify-content-center'>
                    {/* <Loader
                        type='Circles'
                        color='#DC3545'
                        height={200}
                        width={200}
                    /> */}
                </div>
            )
        } else {

            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={data.image} alt='display poster' />
                        </div>
                        <div className='col-8'>
                            <div className='vertical-spacing'>
                                <h2>
                                    {data.name}
                                </h2>
                            </div>
                            {this.renderCasts()}
                            <div className='vertical-spacing'>
                                {data.director}
                            </div>
                            <div className='vertical-spacing'>
                                Duration: {data.duration} Minutes
                        </div>
                            <div className='vertical-spacing'>
                                {this.renderGenreButton()}
                            </div>
                            <div className='vertical-spacing'>
                                {data.synopsis}
                            </div>
                            <div className='vertical-spacing' style={{ marginTop: '100px', float: 'right' }}>
                                <Button color='danger' className='btn-custom' href="/order">Choose My Seats</Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MovieDetail;