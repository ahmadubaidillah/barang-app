// src/api/auth.js
import axios from "axios";

const API_URL = "http://localhost:8080";

export const register = (username, password) => {
  return axios.post(`${API_URL}/auth/register`, { username, password });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}/auth/login`, { username, password });
};
