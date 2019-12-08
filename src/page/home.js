import React, { Component } from "react"
import Kartu from "../component/kartu"
import Axios from "axios"
import Carousel from "../component/carousel"

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
                <Kartu judul={val.name} image={val.image} />
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

                    {this.renderCarousel()}
                </div>
                <div>
                    {this.renderCardProduct()}
                </div >
            </div>
        )
    }
}

export default (Home)