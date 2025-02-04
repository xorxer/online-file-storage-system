import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL! || 'http://localhost:000/';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
