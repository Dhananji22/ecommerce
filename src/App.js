import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import ProductsList from './components/ProductsList/ProductsList'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'


const App = () => {
    return (
        <Router>
            <Navbar />
          
             <Routes>
                <Route path="/" element={<ProductsList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer/>

        </Router>
    );
};

export default App;

