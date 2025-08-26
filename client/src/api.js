// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const registerUser = async (name, email, password) => {
    try {
        const res = await api.post('/auth/register', { name, email, password });
        return res.data;
    } catch (err) {
        throw err.response?.data?.msg || 'Registration failed';
    }
};

export const loginUser = async (email, password) => {
    try {
        const res = await api.post('/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        return res.data;
    } catch (err) {
        throw err.response?.data?.msg || 'Login failed';
    }
};

export const getDashboardData = async () => {
    try {
        const users = await api.get('/dashboard/users');
        const kpis = await api.get('/dashboard/kpis');
        return { users: users.data, kpis: kpis.data };
    } catch (err) {
        throw err.response?.data?.msg || 'Failed to fetch dashboard data';
    }
};