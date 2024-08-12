import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css';

const Cart = () => {
    const { cartItems, getTotalAmount } = useContext(CartContext);

    if (cartItems.length === 0) {
        return <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>;
    }

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <p><strong>Total Amount:</strong> ${getTotalAmount()}</p>
                <button className="checkout">Checkout</button>
                <Link to="/" className="continue-shopping">Continue Shopping</Link>
            </div>
        </div>
    );
};

export default Cart;
