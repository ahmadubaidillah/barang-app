import React, { useState } from "react";

const KategoriForm = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-2xl mb-6">
        {initialData ? "Update Kategori" : "Create Kategori"}
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default KategoriForm;
