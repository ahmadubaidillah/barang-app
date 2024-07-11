import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BarangPage from "./pages/BarangPage";
import KategoriPage from "./pages/KategoriPage";
import CreateBarangPage from "./pages/CreateBarangPage";
import UpdateBarangPage from "./pages/UpdateBarangPage";
import CreateKategoriPage from "./pages/CreateKategoriPage";
import UpdateKategoriPage from "./pages/UpdateKategoriPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/barang"
          element={
            <PrivateRoute>
              <BarangPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/barang/create"
          element={
            <PrivateRoute>
              <CreateBarangPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/barang/update/:id"
          element={
            <PrivateRoute>
              <UpdateBarangPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/kategori"
          element={
            <PrivateRoute>
              <KategoriPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/kategori/create"
          element={
            <PrivateRoute>
              <CreateKategoriPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/kategori/update/:id"
          element={
            <PrivateRoute>
              <UpdateKategoriPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
