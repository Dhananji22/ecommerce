import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {CartContext} from '../CartContext';
import '../ProductDetails/ProductDetails.css';
import img1 from '../ProductsList/img1.png';
import img2 from '../ProductsList/img2.png';
import img3 from '../ProductsList/img3.png';
import img4 from '../ProductsList/img4.png';
import img5 from '../ProductsList/img5.png';
import img6 from '../ProductsList/img6.png';
import img7 from '../ProductsList/img7.png';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const productList = [
        {
            id: '1',
            name: 'Urban Sneakers',
            description: 'Perfect for the city walks. These sneakers offer comfort and style for daily urban adventures.',
            price: 120,
            status: 'In Stock',
            reviews: 27,
            image: img1
        },
        {
            id: '2',
            name: 'Mountain Hiking Boots',
            description: 'Durable boots for hiking. Designed to withstand the toughest mountain terrains.',
            price: 150,
            status: 'In Stock',
            reviews: 34,
            image: img2
        },
        {
            id: '3',
            name: 'Classic Leather Shoes',
            description: 'Elegant shoes for formal occasions. Made from high-quality leather for a timeless look.',
            price: 200,
            status: 'In Stock',
            reviews: 15,
            image: img3
        },
        {
            id: '4',
            name: 'Running Shoes',
            description: 'Lightweight and comfortable running shoes. Ideal for both casual joggers and serious runners.',
            price: 95,
            status: 'In Stock',
            reviews: 40,
            image: img4
        },
        {
            id: '5',
            name: 'Basketball Sneakers',
            description: 'High-performance sneakers for the court. Provide the best support for your game.',
            price: 130,
            status: 'In Stock',
            reviews: 19,
            image: img5
        },
        {
            id: '6',
            name: 'Trail Running Shoes',
            description: 'Designed for rough trails. These shoes offer great grip and protection on any surface.',
            price: 140,
            status: 'In Stock',
            reviews: 25,
            image: img6
        },
        {
            id: '7',
            name: 'Casual Slip-ons',
            description: 'Easy to wear slip-ons for everyday use. Comfort meets convenience in these casual shoes.',
            price: 80,
            status: 'In Stock',
            reviews: 22,
            image: img7
        },
    ];

    const product = productList.find(product => product.id === id);

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="product-info">
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Status:</strong> {product.status}</p>
                <p><strong>Reviews:</strong> {product.reviews} reviews</p>
            </div>
            <label>
                Quantity
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
