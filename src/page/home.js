import React, { Component } from "react"
import Kartu from "../component/kartu"
import Axios from "axios"
import Carousel from "../component/carousel"
import "./home.css"
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { API_URL } from "../helper/API_URL"
import Lain from "../component/grid"
import Grid from '@material-ui/core/Grid';

class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        Axios.get(API_URL + "movies")
            .then((res) => {
                console.log(res.data)
                this.setState({ data: res.data })
            })
    }

    renderCardProduct = () => {
        return this.state.data.map((val) => {
            return (
                <Kartu judul={val.name} image={val.image} id={val.id}> </Kartu>
            )
        })
    }

    rendergrid = () => {
        return this.state.data.map((val) => {
            return (
                <Lain judul={val.name} image={val.image} id={val.id}></Lain>
            )
        })
    }

    renderCarousel = () => {
        return (
            <Carousel data={this.state.data} />
        )
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.props.username
                            ?
                            <Alert color="dark">
                                Hi! {this.props.username}
                            </Alert>
                            :
                            null
                    }
                </div>
                <div className="bebas">
                    <center>
                        {this.renderCarousel()}
                    </center>
                </div>
                <div className="row">
                    {/* {this.renderCardProduct()} */}
                    {this.rendergrid()}
                </div >
            </div>
        )
    }
}

const mapStatetoProps = ({ auth }) => {
    return {
        username: auth.username
    }
}

export default connect(mapStatetoProps)(Home);