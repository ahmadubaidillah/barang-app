import React from "react";
import { useNavigate } from "react-router-dom";
import { createKategori } from "../api/kategori";
import KategoriForm from "../components/KategoriForm";
import Navbar from "../components/Navbar";

const CreateKategoriPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (newKategori) => {
    await createKategori(newKategori);
    navigate("/kategori");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Create Kategori</h1>
        <KategoriForm onSubmit={handleCreate} />
      </div>
    </>
  );
};

export default CreateKategoriPage;
