// API Configuration
const API_BASE_URL = "http://localhost:5000/api";

// Store auth token in localStorage
const getToken = () => localStorage.getItem("token");
const setToken = (token) => localStorage.setItem("token", token);
const removeToken = () => localStorage.removeItem("token");
const getUser = () => JSON.parse(localStorage.getItem("user") || "null");
const setUser = (user) => localStorage.setItem("user", JSON.stringify(user));

// API Helper Functions
const apiCall = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Auth API
const authAPI = {
  register: async (userData) => {
    const data = await apiCall("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    if (data.token) {
      setToken(data.token);
      setUser(data.user);
    }
    return data;
  },

  login: async (email, password) => {
    const data = await apiCall("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (data.token) {
      setToken(data.token);
      setUser(data.user);
    }
    return data;
  },

  logout: () => {
    removeToken();
    localStorage.removeItem("user");
  },

  getProfile: async () => {
    return await apiCall("/auth/profile");
  },

  updateProfile: async (profileData) => {
    return await apiCall("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(profileData),
    });
  },
};

// Product API
const productAPI = {
  getAll: async (filters = {}) => {
    const queryString = new URLSearchParams(filters).toString();
    return await apiCall(`/products${queryString ? `?${queryString}` : ""}`);
  },

  getByCategory: async (category) => {
    return await apiCall(`/products/category/${category}`);
  },

  getById: async (id) => {
    return await apiCall(`/products/${id}`);
  },

  search: async (searchTerm) => {
    return await apiCall(`/products?search=${encodeURIComponent(searchTerm)}`);
  },
};

// Cart API
const cartAPI = {
  get: async () => {
    return await apiCall("/cart");
  },

  add: async (productId, quantity = 1) => {
    return await apiCall("/cart/add", {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    });
  },

  update: async (itemId, quantity) => {
    return await apiCall(`/cart/update/${itemId}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
    });
  },

  remove: async (itemId) => {
    return await apiCall(`/cart/remove/${itemId}`, {
      method: "DELETE",
    });
  },

  clear: async () => {
    return await apiCall("/cart/clear", {
      method: "DELETE",
    });
  },
};

// Order API
const orderAPI = {
  getAll: async () => {
    return await apiCall("/orders");
  },

  getById: async (id) => {
    return await apiCall(`/orders/${id}`);
  },

  create: async (orderData) => {
    return await apiCall("/orders/create", {
      method: "POST",
      body: JSON.stringify(orderData),
    });
  },
};

// Export for use in other scripts
if (typeof window !== "undefined") {
  window.authAPI = authAPI;
  window.productAPI = productAPI;
  window.cartAPI = cartAPI;
  window.orderAPI = orderAPI;
  window.getToken = getToken;
  window.getUser = getUser;
}

