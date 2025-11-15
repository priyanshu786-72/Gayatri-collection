# How to Start the Application

## Step 1: Make sure MongoDB is running

### If MongoDB is installed locally:
1. Open a new terminal/PowerShell window
2. Start MongoDB:
   ```powershell
   mongod
   ```
   Or if MongoDB is installed as a service, it should already be running.

### If MongoDB is not installed:
You can use MongoDB Atlas (free cloud database):
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Update the `.env` file in the backend folder with your MongoDB connection string

## Step 2: Start the Backend Server

### Option A: Using the batch file (Windows)
Double-click `start-backend.bat` or run in PowerShell:
```powershell
.\start-backend.bat
```

### Option B: Manual start
1. Open a new terminal/PowerShell window
2. Navigate to the backend folder:
   ```powershell
   cd D:\shop\Gayatri-shop\backend
   ```
3. Start the server:
   ```powershell
   node server.js
   ```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
📡 API available at http://localhost:5000
```

**Keep this window open!** The server needs to keep running.

## Step 3: Start the Frontend Server

1. Open a **NEW** terminal/PowerShell window (keep the backend running)
2. Navigate to the frontend folder:
   ```powershell
   cd D:\shop\Gayatri-shop\frontend
   ```
3. Start the frontend server:
   ```powershell
   npx http-server -p 8000
   ```

## Step 4: Access the Application

1. Open your browser
2. Go to: http://localhost:8000
3. You should see the homepage
4. Click on "Login" to login with your account

## Troubleshooting

### "Cannot connect to server" error:
- Make sure the backend server is running (Step 2)
- Check if port 5000 is available
- Make sure MongoDB is running

### "MongoDB Error" in backend:
- Make sure MongoDB is installed and running
- Check if MongoDB is running on `localhost:27017`
- Or update the MongoDB connection string in the `.env` file

### Login not working:
- Make sure the backend server is running
- Check the browser console for errors (F12)
- Try refreshing the page
- Make sure you're using the correct email and password

## Quick Start (All in One)

If you have MongoDB running, you can use the start script:

```powershell
cd D:\shop\Gayatri-shop
.\start.ps1
```

This will start both backend and frontend servers automatically.

