import React from 'react'
import ReactDOM from 'react-dom'

const Product = (props) => {
    return (
        <div className="product">
            <img src={ props.img_url } alt={ props.name } />
            <div className="name">{ props.name }</div>

            <button 
                onClick={ () => props.addToBasketClick(props.id) }
            >Add to basket</button>
        </div>
    )
}

export default Product;


/// inmutability and why the initial state shoudnt be changed. new state in component did mount
//first state, original
//new state in componentdidmount, with argumet being the new state
//then render, empty array, loopthrough it and push items