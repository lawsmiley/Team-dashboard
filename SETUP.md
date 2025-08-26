# 🚀 Team Dashboard Setup Guide

## Prerequisites

Before starting, make sure you have:
- ✅ Node.js (v16 or higher) installed
- ✅ MongoDB installed and running
- ✅ Git (optional, for version control)

## 🛠️ Quick Setup

### 1. Install Dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Environment Configuration

The `.env` file has been created automatically. It contains:
```env
MONGO_URI=mongodb://localhost:27017/team-dashboard
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

**⚠️ Important:** Change the `JWT_SECRET` to a secure random string for production use.

### 3. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB

# Or if using MongoDB Community Server, it should start automatically
```

**macOS/Linux:**
```bash
# Start MongoDB service
sudo systemctl start mongod

# Or
brew services start mongodb-community
```

### 4. Start the Application

**Option A: Run both frontend and backend together**
```bash
npm run dev
```

**Option B: Run separately**
```bash
# Terminal 1 - Start backend
npm run server

# Terminal 2 - Start frontend
npm run client
```

## 🌐 Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

## 🧪 Test the Setup

Run the test script to verify everything is working:
```bash
node test-connection.js
```

## 🔐 Default Login

The system will automatically create a default admin user:
- **Email:** admin@example.com
- **Password:** admin123

## 📱 Features Available

- ✅ User registration and login
- ✅ JWT authentication
- ✅ Role-based access control
- ✅ Dashboard with KPIs
- ✅ User management
- ✅ Responsive design
- ✅ Modern UI with animations

## 🚨 Troubleshooting

### Common Issues

1. **"MongoDB connection failed"**
   - Ensure MongoDB is running
   - Check if the port 27017 is available
   - Verify your connection string in `.env`

2. **"Port already in use"**
   - Change the PORT in `.env` file
   - Kill processes using the default ports

3. **"Module not found" errors**
   - Run `npm install` in both root and client directories
   - Clear node_modules and reinstall if needed

4. **CORS errors**
   - The server is configured to allow localhost:3000
   - Check if your frontend is running on the correct port

### Reset Database

If you need to reset the database:
```bash
# Connect to MongoDB
mongo

# Switch to database
use team-dashboard

# Drop all collections
db.dropDatabase()

# Exit
exit
```

Then restart the server - it will recreate everything automatically.

## 🔧 Development

### Project Structure
```
team-dashboard/
├── client/                 # React frontend
├── config/                 # Database configuration
├── middleware/             # Express middleware
├── routes/                 # API routes
├── server.js              # Main server file
└── package.json           # Dependencies
```

### Available Scripts
- `npm run dev` - Start both frontend and backend
- `npm run server` - Start backend only
- `npm run client` - Start frontend only
- `npm run build` - Build frontend for production

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify MongoDB is running
3. Check the `.env` configuration
4. Run the test script: `node test-connection.js`

## 🎉 Success!

Once everything is running:
1. Open http://localhost:3000 in your browser
2. Register a new account or use the default admin
3. Explore the dashboard features
4. Enjoy your new team dashboard! 🎊
