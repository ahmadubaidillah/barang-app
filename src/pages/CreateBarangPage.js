import React from "react";
import { useNavigate } from "react-router-dom";
import { createBarang } from "../api/barang";
import BarangForm from "../components/BarangForm";
import Navbar from "../components/Navbar";

const CreateBarangPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (newBarang) => {
    await createBarang(newBarang);
    navigate("/barang");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Create Barang</h1>
        <BarangForm onSubmit={handleCreate} />
      </div>
    </>
  );
};

export default CreateBarangPage;
