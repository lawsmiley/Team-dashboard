// server.js
require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const initializeDatabase = require('./config/initDb');
const app = express();

// Connect Database
connectDB();

// Initialize database with default roles and admin user
setTimeout(async () => {
    await initializeDatabase();
}, 2000); // Wait for database connection to establish

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://yourdomain.com'] 
        : ['http://localhost:3000'],
    credentials: true
}));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboard', require('./routes/dashboard'));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
    console.log(`📱 Frontend should be running on http://localhost:3000`);
    console.log(`🔗 API available at http://localhost:${PORT}/api`);
});