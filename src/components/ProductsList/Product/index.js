import React from "react"
import styles from "./product-card.model.scss"

import Card from "../../Card"
import ProductDetail from "../../ProductDetail"


const ProductCard = ({ name, img_url, price, description }) => {
    return(
        <Card>
            <h2>{name}</h2>
            <img src={img_url} alt="product"/>
            <h3 className={styles.image}>Price: ${price / 100}.00</h3>
        </Card>
    )
}

export default ProductCard