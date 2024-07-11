import axios from "axios";

const API_URL = "http://localhost:8080/kategori";

export const getAllKategori = () => {
  return axios.get(API_URL, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
export const getKategoriById = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const createKategori = (kategori) => {
  return axios.post(`${API_URL}/create`, kategori, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const updateKategori = (id, kategori) => {
  return axios.put(`${API_URL}/update/${id}`, kategori, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const deleteKategori = (id) => {
  return axios.put(`${API_URL}/delete/${id}`, null, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
