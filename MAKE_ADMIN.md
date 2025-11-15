# How to Create an Admin User

## Option 1: Using the Script (Recommended)

1. **First, register a user** at http://localhost:8000/login.html
   - Use any email and password
   - Example: `admin@example.com` / `admin123`

2. **Then run this command** in the backend directory:
   ```bash
   cd Gayatri-shop/backend
   node createAdmin.js admin@example.com
   ```
   (Replace `admin@example.com` with the email you registered)

3. **Login again** with that email
4. **Access admin panel** at http://localhost:8000/admin.html

## Option 2: Using MongoDB Directly

1. Register a user at http://localhost:8000/login.html

2. Open MongoDB Compass or MongoDB shell

3. Connect to your database: `mongodb://localhost:27017/gayatri-shop`

4. Run this command:
   ```javascript
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } }
   )
   ```
   (Replace `admin@example.com` with your email)

## Option 3: Register with Admin Role (Code Modification)

If you want to allow admin registration directly, you can temporarily modify the registration to accept admin role:

1. In `backend/routes/authRoutes.js`, temporarily allow admin registration
2. Register with role: "admin"
3. Revert the change

---

**Quick Steps:**
1. Go to http://localhost:8000/login.html
2. Register with email: `admin@test.com` and password: `admin123`
3. Run: `cd Gayatri-shop/backend && node createAdmin.js admin@test.com`
4. Login again
5. Go to http://localhost:8000/admin.html

