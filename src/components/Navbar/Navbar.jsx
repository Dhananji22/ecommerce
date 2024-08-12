import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import cart from '../Navbar/cart.png'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ShoeStore</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cart" img src= {cart} >Cart</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
