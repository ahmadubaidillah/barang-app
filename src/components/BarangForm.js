import React, { useState, useEffect } from "react";
import { getAllKategori } from "../api/kategori";

const BarangForm = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [kategoriId, setKategoriId] = useState(initialData?.kategoriId || "");
  const [harga, setHarga] = useState(initialData?.harga || "");
  const [image, setImage] = useState(null);
  const [kategoris, setKategoris] = useState([]);

  useEffect(() => {
    async function fetchKategoris() {
      const response = await getAllKategori();
      setKategoris(response.data);
    }
    fetchKategoris();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("kategoriId", kategoriId);
    formData.append("harga", harga);
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl mb-6">
        {initialData ? "Update Barang" : "Create Barang"}
      </h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Kategori</label>
        <select
          value={kategoriId}
          onChange={(e) => setKategoriId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Kategori</option>
          {kategoris.map((kategori) => (
            <option key={kategori.id} value={kategori.id}>
              {kategori.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Harga</label>
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default BarangForm;
