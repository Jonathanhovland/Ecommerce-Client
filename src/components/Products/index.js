import React, { Component } from "react"
import ProductCard from "./ProductCard"

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    products: data.products
                })
            })
            .catch(error => {
                console.log("error with fetch")
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Products!</h1>
                </header>
                {this.state.products.map(product => {
                    return <ProductCard />
                })}
            </div>
        )
    }
}

export default Products 