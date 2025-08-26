const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true,
        enum: ['admin', 'manager', 'user']
    },
    permissions: [{
        type: String,
        enum: ['read', 'write', 'delete', 'admin']
    }],
    description: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Role', RoleSchema);