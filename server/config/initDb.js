// config/initDb.js
const Role = require('./models/Role');
const User = require('./models/User');

const initializeDatabase = async () => {
    try {
        // Create default roles if they don't exist
        const defaultRoles = [
            { name: 'admin', permissions: ['read', 'write', 'delete', 'admin'], description: 'Full system access' },
            { name: 'manager', permissions: ['read', 'write'], description: 'Team management access' },
            { name: 'user', permissions: ['read'], description: 'Basic user access' }
        ];

        for (const roleData of defaultRoles) {
            const existingRole = await Role.findOne({ name: roleData.name });
            if (!existingRole) {
                await Role.create(roleData);
                console.log(`Created role: ${roleData.name}`);
            }
        }

        // Create a default admin user if no users exist
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            const adminRole = await Role.findOne({ name: 'admin' });
            if (adminRole) {
                const bcrypt = require('bcryptjs');
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash('admin123', salt);
                
                await User.create({
                    name: 'Admin User',
                    email: 'admin@example.com',
                    password: hashedPassword,
                    role: adminRole._id
                });
                console.log('Created default admin user: admin@example.com / admin123');
            }
        }

        console.log('Database initialization completed successfully');
    } catch (error) {
        console.error('Database initialization failed:', error);
    }
};

module.exports = initializeDatabase;
