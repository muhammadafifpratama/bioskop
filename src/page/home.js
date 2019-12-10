import React, { Component } from "react"
import Kartu from "../component/kartu"
import Axios from "axios"
import Carousel from "../component/carousel"
import "./home.css"
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

class Home extends Component {

    state = {
        data: [],
        nama: ""
    }

    componentDidMount() {
        Axios.get("http://localhost:2000/movies")
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
                    {this.renderCardProduct()}
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