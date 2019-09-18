import React from "react"
import Card from "../../Card"

const ProductCard = ({ name, img_url, price, description }) => {
    return(
        <Card>
            <h2>{name}</h2>
            <img src={img_url} alt="product"/>
            <h3>Price: ${price / 100}.00</h3>
            <h2>{description}</h2>
        </Card>
    )
}

export default ProductCard