# Quick Guide: How to Add Products

## Step 1: Register a User
1. Go to: **http://localhost:8000/login.html**
2. Click **"Sign up"** link at the bottom
3. Fill in the form:
   - **Name:** Admin
   - **Email:** admin@test.com (or any email)
   - **Password:** admin123 (or any password)
   - **Phone:** (optional)
   - **Role:** Select "Customer" (we'll change it to admin)
4. Click **"Sign Up"**

## Step 2: Make User an Admin
After registering, run this command in PowerShell:

```powershell
cd Gayatri-shop/backend
node createAdmin.js admin@test.com
```

(Replace `admin@test.com` with the email you used)

You should see: ✅ User admin@test.com is now an admin!

## Step 3: Login as Admin
1. Go back to: **http://localhost:8000/login.html**
2. Login with your email and password
3. You should be redirected to the home page

## Step 4: Access Admin Panel
1. Go to: **http://localhost:8000/admin.html**
2. You should now see the product form (not "Access Denied")

## Step 5: Add a Product
Fill in the form with product details:

**Example:**
- **Product Name:** Men's Cotton Shirt
- **Image URL:** https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500
- **Price:** 899
- **Category:** Men (or Women, Kids)
- **Description:** High quality cotton shirt, comfortable fit

Click **"Add Product"** button.

You should see: ✅ Product added!

## Step 6: View Products
Go to: **http://localhost:8000/index.html** to see your products on the homepage!

---

## Tips:
- **Image URLs:** Use any image URL from the internet (Unsplash, Pexels, etc.)
- **Categories:** Use: Men, Women, Kids, or any category name
- **Price:** Enter numbers only (no ₹ symbol)
- **Stock:** Automatically set to 100 for new products

---

## Troubleshooting:

**"Access Denied" error?**
- Make sure you logged in after creating admin user
- Check if admin creation script ran successfully

**"Failed to add product" error?**
- Make sure backend server is running on port 5000
- Check if you're logged in (token might have expired)
- Try logging in again

