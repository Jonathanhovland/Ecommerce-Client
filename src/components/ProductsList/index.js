import React, { Component } from "react"
import styles from "./products-list.module.scss"

import Product from "./Product"
import Loader from "../Loader"

class Products extends Component {
    state = {
        products: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    products: data.products,
                    isLoaded: true
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
                {this.state.isLoaded ?
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
                :<Loader />
                }
            </div>
        )
    }
}

export default Products 