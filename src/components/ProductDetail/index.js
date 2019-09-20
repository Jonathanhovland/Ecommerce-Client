import React, { Component } from "react"

import Card from "../Card"
import Loader from "../Loader"

class ProductDetail extends Component {
    state = {
        product: {},
        isLoaded: false
    }

    // fetch data from ONE product
    componentDidMount() {
        const id = this.props.match.params.id
        
        fetch(`http://localhost:4000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    product: data.product,
                    isLoaded: true
                })
            })
            .catch(error => {
                console.log("somethings wrong darn it")
            })
    }

    render() {
        return(
            <div>
                <h2>Product Detail</h2>
                {this.state.isLoaded ?
                    <Card>
                        <h2>{this.state.product.name}</h2>
                        <img src={this.state.product.img_url} alt="product"/>
                        <p>{this.state.product.description}</p>
                        <h3>Price: ${this.state.product.price / 100}.00</h3>
                    </Card>
                :<Loader />
                }
            </div>
        )
    }
}

export default ProductDetail