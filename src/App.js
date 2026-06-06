import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Alumnos from "./pages/Alumnos";
import Pagos from "./pages/Pagos";
import Usuarios from "./pages/Usuarios";
import Cobranza from "./pages/Cobranza";
import Documentos from "./pages/Documentos";
import Facturacion from "./pages/Facturacion";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/cobranza" element={<Cobranza />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/facturacion" element={<Facturacion />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;