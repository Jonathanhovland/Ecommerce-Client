import React, { Component } from "react"
import styles from "./products-list.module.scss"

import Product from "./Product"

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(data => {
                console.log(data.products)
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
            <div className={styles.container}>
                <header>
                    <h1>Welcome to Products!</h1>
                </header>
                <div className={styles.productsContainer}>
                    {this.state.products.map(product => {
                        return (
                            <Product 
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                img_url={product.img_url}
                                price={product.price}
                            />)
                    })}
                </div>
            </div>
        )
    }
}

export default Products 