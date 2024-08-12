import React from 'react';
import '../Products/Products.css';


const Product = ({ title, description, price, reviews, image }) => {
    return (
        <div className="product">
            <img src={image} alt={title} className="product__image" />
            <h3 className="product__title">{title}</h3>
            <p className="product__description">{description}</p>
            <p className="product__price">${price}</p>
            <p className="product__reviews">{reviews} reviews</p>
        </div>
    );
};

export default Product;
