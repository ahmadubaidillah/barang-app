import axios from "axios";

const API_URL = "http://localhost:8080/barang";

export const getAllBarang = () => {
  return axios.get(API_URL, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
export const getBarangById = (id) => {
  return axios.get(`${API_URL}/${id}`, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const createBarang = (barang) => {
  return axios.post(`${API_URL}/create`, barang, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateBarang = (id, barang) => {
  return axios.put(`${API_URL}/update/${id}`, barang, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteBarang = (id) => {
  return axios.put(`${API_URL}/delete/${id}`, null, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
