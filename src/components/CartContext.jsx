import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
