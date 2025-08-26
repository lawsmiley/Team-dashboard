// routes/dashboard.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../config/models/User');

// @route   GET api/dashboard/users
// @desc    Get all users (requires auth)
// @access  Private
router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find().populate('role', 'name').select('-password');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/dashboard/kpis
// @desc    Get dashboard KPIs
// @access  Private
router.get('/kpis', auth, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const activeUsers = await User.countDocuments({ status: 'active' });
        
        // For now, return mock data for pending tasks
        // In a real app, you'd fetch this from a Task model
        const pendingTasks = 12;
        
        res.json({ 
            totalUsers, 
            activeUsers: totalUsers, // Defaulting to total users for now
            pendingTasks 
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/dashboard/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('role', 'name').select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;