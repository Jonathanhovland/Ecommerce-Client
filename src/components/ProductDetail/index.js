import React, { Component } from "react"

class ProductDetail extends Component {
    state = {
        product: {}
    }

    // fetch data from ONE product
    componentDidMount() {
        const id = this.props.match.params.id
        
        fetch(`http://localhost:4000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    product: data.product
                })
            })
            .catch(error => {
                console.log("somethings wrong darn it")
            })
    }

    render() {
        return(
            <h2>Product ID: {this.state.product.id} </h2>
        )
    }
}

export default ProductDetail