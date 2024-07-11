import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllKategori, deleteKategori } from "../api/kategori";
import Table from "../components/Table";
import Navbar from "../components/Navbar";

const KategoriPage = () => {
  const [kategori, setKategori] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchKategori() {
      const response = await getAllKategori();
      setKategori(response.data);
    }
    fetchKategori();
  }, []);

  const handleDelete = async (id) => {
    await deleteKategori(id);
    setKategori(kategori.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Kategori Management</h1>
        <button
          onClick={() => navigate("/kategori/create")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Create Kategori
        </button>
        <Table
          data={kategori}
          columns={[{ field: "name", label: "Name" }]}
          onEdit={(id) => navigate(`/kategori/update/${id}`)}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default KategoriPage;
