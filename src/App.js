import React from "react";
import Topbar from './components/Topbar';
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
        {/* Tu menú lateral izquierdo se queda fijo aquí */}
        <Sidebar />
        
        {/* Este es el contenedor de todo el lado derecho */}
        <div className="content-container">
          
          {/* 1. Colocamos la barra superior aquí arriba para que se use y aparezca siempre */}
          <Topbar />
          
          {/* 2. El contenedor de abajo donde cambian tus vistas al hacer clic en el menú */}
          <div className="page-content">
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
      </div>
    </Router>
  );
}

export default App;