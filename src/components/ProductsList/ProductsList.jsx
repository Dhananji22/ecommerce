import React from 'react';
import { Link } from 'react-router-dom';
// import Product from '../Products/Products';
import '../ProductsList/ProductsList.css'
import img1 from '../ProductsList/img1.png'
import img2 from '../ProductsList/img2.png'
import img3 from '../ProductsList/img3.png'
import img4 from '../ProductsList/img4.png'
import img5 from '../ProductsList/img5.png'
import img6 from '../ProductsList/img6.png'
import img7 from '../ProductsList/img7.png'


const Products = () => {
    const productList = [
        {
            id : 1,
            title: 'Urban Sneakers',
            description: 'Perfect for the city walks.',
            price: 120,
            reviews: 27,
            image: img1
        },
        {
            id : 2,
            title: 'Mountain Hiking Boots',
            description: 'Durable boots for hiking.',
            price: 150,
            reviews: 34,
            image: img2
        },
        {
            id : 3,
            title: 'Classic Leather Shoes',
            description: 'Elegant shoes for formal occasions.',
            price: 200,
            reviews: 15,
            image: img3
        },
        {
            id : 3,
            title: 'Running Shoes',
            description: 'Lightweight and comfortable running shoes.',
            price: 95,
            reviews: 40,
            image: img4
        },
        {
            id : 4,
            title: 'Basketball Sneakers',
            description: 'High-performance sneakers for the court.',
            price: 130,
            reviews: 19,
            image: img5
        },
        {
            id : 5,
            title: 'Running Shoes',
            description: 'Lightweight and comfortable running shoes.',
            price: 95,
            reviews: 40,
            image: img6
        },
        {
            title: 'Basketball Sneakers',
            description: 'High-performance sneakers for the court.',
            price: 130,
            reviews: 19,
            image: img7
        },
        {
            title: 'Classic Leather Shoes',
            description: 'Elegant shoes for formal occasions.',
            price: 200,
            reviews: 15,
            image: img1
        },
        {
            title: 'Running Shoes',
            description: 'Lightweight and comfortable running shoes.',
            price: 95,
            reviews: 40,
            image: img2
        },
        {
            title: 'Basketball Sneakers',
            description: 'High-performance sneakers for the court.',
            price: 130,
            reviews: 19,
            image: img3
        }
        // Add more products as needed
    ];

    return (
        <div className="product-list">
        {productList.map(product => (
            <div key={product.id} className="product-item">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </Link>
            </div>
        ))}
    </div>
    );
};

export default Products;
