# Quick Setup Guide

## Step 1: Install Backend Dependencies

```bash
cd Gayatri-shop/backend
npm install
```

## Step 2: Setup Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGO_URL=mongodb://localhost:27017/gayatri-shop
PORT=5000
JWT_SECRET=your-secret-key-change-this-in-production
```

**Note:** If you're using MongoDB Atlas, use your connection string:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/gayatri-shop
```

## Step 3: Start MongoDB

Make sure MongoDB is running:
- **Local MongoDB:** Start MongoDB service
- **MongoDB Atlas:** Your connection string is already configured

## Step 4: Start Backend Server

```bash
cd Gayatri-shop/backend
npm start
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
📡 API available at http://localhost:5000
```

## Step 5: Open Frontend

1. Open `Gayatri-shop/frontend/index.html` in your web browser
2. Or use a local server:
   ```bash
   cd Gayatri-shop/frontend
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Step 6: Create Admin User

1. Register a new user at `/login.html`
2. Then update the user role in MongoDB:
   ```javascript
   db.users.updateOne(
     { email: "your-email@example.com" },
     { $set: { role: "admin" } }
   )
   ```
3. Or use the registration API with role: `admin` (requires modifying the code)

## Testing the API

You can test the API endpoints using:
- Browser: Visit `http://localhost:5000/api/products`
- Postman/Thunder Client
- curl:
  ```bash
  curl http://localhost:5000/api/products
  ```

## Common Issues

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your MONGO_URL in `.env` file
- For MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use
- Change PORT in `.env` file
- Or kill the process using port 5000

### CORS Errors
- Backend has CORS enabled for all origins
- If issues persist, check browser console

### Token Errors
- Make sure you're logged in
- Token expires after 7 days
- Clear localStorage and login again

## Next Steps

1. Add products via Admin panel (`admin.html`)
2. Register as customer or reseller
3. Browse products and add to cart
4. Place orders and track them

Happy Shopping! 🛍️

