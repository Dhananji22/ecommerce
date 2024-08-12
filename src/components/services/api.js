import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
};

export const addToCart = async (cartData, token) => {
    const response = await axios.post(`${API_URL}/cart/add`, cartData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getCart = async (userId, token) => {
    const response = await axios.get(`${API_URL}/cart/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
