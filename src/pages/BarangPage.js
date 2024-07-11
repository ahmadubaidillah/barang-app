import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBarang, deleteBarang } from "../api/barang";
import Table from "../components/Table";
import Navbar from "../components/Navbar";

const BarangPage = () => {
  const [barang, setBarang] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBarang() {
      const response = await getAllBarang();
      setBarang(response.data);
    }
    fetchBarang();
  }, []);

  const handleDelete = async (id) => {
    await deleteBarang(id);
    setBarang(barang.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Barang Management</h1>
        <button
          onClick={() => navigate("/barang/create")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Create Barang
        </button>
        <Table
          data={barang}
          columns={[
            { field: "name", label: "Name" },
            { field: "kategoriId", label: "Kategori" },
            { field: "harga", label: "Harga" },
            {
              field: "image",
              label: "Image",
              render: (rowData) => (
                <img
                  src={rowData.image}
                  alt={rowData.name}
                  className="h-16 w-auto"
                />
              ),
            },
          ]}
          onEdit={(id) => navigate(`/barang/update/${id}`)}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default BarangPage;
