import axios from 'axios';
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';
const http = axios.create({ baseURL: BASE, headers: { 'Content-Type': 'application/json' } });
export default http;
