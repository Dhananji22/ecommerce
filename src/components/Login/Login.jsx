

import React, { useState } from 'react';
import { loginUser } from '../services/api';
import '../Login/Login.css'


const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            console.log('User logged in:', data);
            localStorage.setItem('token', data.token); // Save the token to local storage
            // Handle successful login, maybe redirect to home
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;


