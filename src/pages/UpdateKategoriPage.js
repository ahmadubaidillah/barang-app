import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getKategoriById, updateKategori } from "../api/kategori";
import KategoriForm from "../components/KategoriForm";
import Navbar from "../components/Navbar";

const UpdateKategoriPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function fetchKategori() {
      const response = await getKategoriById(id);
      setInitialData(response.data);
    }
    fetchKategori();
  }, [id]);

  const handleUpdate = async (updatedKategori) => {
    await updateKategori(id, updatedKategori);
    navigate("/kategori");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Update Kategori</h1>
        {initialData ? (
          <KategoriForm initialData={initialData} onSubmit={handleUpdate} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default UpdateKategoriPage;
