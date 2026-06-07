import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EBENEZER</h2>
      
      <nav className="sidebar-nav">
        <Link to="/">
          <i className="fas fa-chart-pie"></i> Dashboard
        </Link>
        
        <Link to="/alumnos">
          <i className="fas fa-user-graduate"></i> Alumnos
        </Link>
        
        <Link to="/pagos">
          <i className="fas fa-wallet"></i> Registro de Pagos
        </Link>
        
        <Link to="/cobranza">
          <i className="fas fa-exclamation-circle"></i> Control Cobranza
        </Link>
        
        <Link to="/facturacion">
          <i className="fas fa-file-invoice-dollar"></i> Facturación
        </Link>
        
        <Link to="/documentos">
          <i className="fas fa-folder-open"></i> Documentos
        </Link>
        
        <Link to="/reportes">
          <i className="fas fa-chart-line"></i> Reportes
        </Link>
        
        <Link to="/usuarios">
          <i className="fas fa-users-cog"></i> Usuarios
        </Link>
        
        <Link to="/configuracion">
          <i className="fas fa-cog"></i> Configuración
        </Link>
      </nav>
    </div>
  );
}