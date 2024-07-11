import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg">Barang App</h1>
        <div>
          <Link to="/barang" className="text-white mx-2">
            Barang
          </Link>
          <Link to="/kategori" className="text-white mx-2">
            Kategori
          </Link>
          <button
            onClick={handleLogout}
            className="text-white mx-2 bg-red-500 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
