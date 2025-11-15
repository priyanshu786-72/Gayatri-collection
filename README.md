<<<<<<< HEAD
# Gayatri-shop
=======
# Gayatri Collection - E-Commerce Platform (Meesho-like)

A full-stack e-commerce application similar to Meesho with support for customers and resellers.

## Features

- 🔐 **User Authentication** - Register/Login with JWT tokens
- 👥 **Multiple User Roles** - Customer, Reseller, and Admin
- 🛍️ **Product Management** - Add, update, delete products (Admin only)
- 🛒 **Shopping Cart** - Add, update, remove items
- 📦 **Order Management** - Create orders, track status
- 🔍 **Product Search** - Search products by name, description
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing

### Frontend
- **HTML, CSS, JavaScript**
- **Fetch API** for backend communication

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Backend Setup

1. Navigate to backend directory:
```bash
cd Gayatri-shop/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGO_URL=mongodb://localhost:27017/gayatri-shop
PORT=5000
JWT_SECRET=your-secret-key-change-this-in-production
```

4. Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd Gayatri-shop/frontend
```

2. Open `index.html` in a web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

3. Access the application at `http://localhost:8000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires auth)
- `PUT /api/auth/profile` - Update user profile (requires auth)

### Products
- `GET /api/products` - Get all products (with optional filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Add product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user's cart (requires auth)
- `POST /api/cart/add` - Add item to cart (requires auth)
- `PUT /api/cart/update/:itemId` - Update cart item quantity (requires auth)
- `DELETE /api/cart/remove/:itemId` - Remove item from cart (requires auth)
- `DELETE /api/cart/clear` - Clear cart (requires auth)

### Orders
- `GET /api/orders` - Get user's orders (requires auth)
- `GET /api/orders/:id` - Get single order (requires auth)
- `POST /api/orders/create` - Create order from cart (requires auth)
- `PUT /api/orders/:id/status` - Update order status (Admin only)
- `GET /api/orders/admin/all` - Get all orders (Admin only)

## User Roles

### Customer
- Browse products
- Add products to cart
- Place orders
- View order history

### Reseller
- All customer features
- Access to reseller pricing (lower prices)

### Admin
- All reseller features
- Add/Edit/Delete products
- Manage orders
- View all orders

## Creating Admin User

To create an admin user, you can:

1. Register normally and then manually update the database:
```javascript
// In MongoDB shell or using a tool like MongoDB Compass
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

2. Or use the registration API with role:
```bash
POST /api/auth/register
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}
```

## Project Structure

```
Gayatri-shop/
├── backend/
│   ├── model/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── index.html
    ├── login.html
    ├── product.html
    ├── cart.html
    ├── checkout.html
    ├── admin.html
    ├── api.js
    ├── style.css
    └── script.js
```

## Features Similar to Meesho

1. **Multi-tier Pricing** - Different prices for customers and resellers
2. **Order Management** - Complete order lifecycle (pending → delivered)
3. **Shopping Cart** - Persistent cart per user
4. **User Profiles** - Address management
5. **Product Categories** - Organize products by category
6. **Search Functionality** - Search products by name/description
7. **Discount System** - Support for discounts and original prices

## Notes

- Make sure MongoDB is running before starting the backend
- The frontend uses localStorage to store authentication tokens
- All authenticated routes require a valid JWT token in the Authorization header
- Free shipping is applied for orders above ₹500

## License

ISC

>>>>>>> 3a10b5d (Initial commit - Gayatri Collection Shop)
