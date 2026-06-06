import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaMoneyBillWave,
  FaUsers,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaChartBar,
  FaCog
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2>EBENEZER</h2>

      <Link to="/"><FaTachometerAlt /> Dashboard</Link>
      <Link to="/alumnos"><FaUserGraduate /> Alumnos</Link>
      <Link to="/pagos"><FaMoneyBillWave /> Pagos</Link>
      <Link to="/usuarios"><FaUsers /> Usuarios</Link>
      <Link to="/cobranza"><FaMoneyBillWave /> Cobranza</Link>
      <Link to="/documentos"><FaFileAlt /> Documentos</Link>
      <Link to="/facturacion"><FaFileInvoiceDollar /> Facturación</Link>
      <Link to="/reportes"><FaChartBar /> Reportes</Link>
      <Link to="/configuracion"><FaCog /> Configuración</Link>

    </div>
  );
}