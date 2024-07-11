import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBarangById, updateBarang } from "../api/barang";
import BarangForm from "../components/BarangForm";
import Navbar from "../components/Navbar";

const UpdateBarangPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function fetchBarang() {
      const response = await getBarangById(id);
      setInitialData(response.data);
    }
    fetchBarang();
  }, [id]);

  const handleUpdate = async (updatedBarang) => {
    await updateBarang(id, updatedBarang);
    navigate("/barang");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Update Barang</h1>
        {initialData ? (
          <BarangForm initialData={initialData} onSubmit={handleUpdate} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default UpdateBarangPage;
