// src/services/axiosConfig.js
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
console.log(process.env.REACT_APP_BASE_URL)

const api = axios.create({
  baseURL: "http://localhost:9090", // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout (in milliseconds)
});

// Optional: Add request/response interceptors
api.interceptors.request.use(
  (config) => {
    // Add any custom logic or headers here
    const token = localStorage.getItem('token'); // Example: Get a token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Example: Redirect to login if unauthorized
      // window.location.href = '/login';
      localStorage.removeItem('token');
      localStorage.removeItem("id");
      // window.location.href = '/login';
    console.log(error.response);
    }
    return Promise.reject(error);
  }
);

export default api;
