import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState(''); // State to store error messages
    const navigate = useNavigate(); // For navigation after successful registration

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser(formData);
            console.log('User registered:', data);
            // If registration is successful, navigate to the home page
            navigate('/');
        } catch (error) {
            console.error('Error registering user:', error);
            // If there's an error, set the error message
            setError('Failed to register. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange} 
                    value={formData.username}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    value={formData.email}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    value={formData.password}
                />
                <button type="submit">Register</button>
            </form>
            {/* Display error message if there is an error */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Register;
