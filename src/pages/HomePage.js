import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Selamat Datang di Aplikasi Barang!
      </h1>
      <p className="text-lg text-gray-600">
        Aplikasi ini memudahkan Anda untuk mengelola data barang secara efisien.
      </p>
      <p className="text-lg text-gray-600">
        Silakan navigasi ke halaman kategori atau barang untuk melihat dan
        mengelola data.
      </p>
    </div>
  );
};

export default HomePage;
