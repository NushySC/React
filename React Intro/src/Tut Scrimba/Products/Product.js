import React from 'react'

function Product (props) {
    return (
        <div>
        <p>{props.product.name}</p>
        <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        <p>{props.product.description}</p>
        </div>
   )
}

export default Product

///import
///export
//function
