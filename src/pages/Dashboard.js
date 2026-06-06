import React from "react";
import { FaUserGraduate, FaMoneyBillWave, FaExclamationTriangle } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { alumnos, pagos, usuarios, morosos } from "../data/ebenezerData";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const totalAlumnos = alumnos.length;
  const totalUsuarios = usuarios.length;
  const ingresosTotales = pagos.reduce((acc, p) => acc + p.monto, 0);

  const alumnosChart = {
    labels: ["Alumnos"],
    datasets: [
      { data: [totalAlumnos], backgroundColor: "#1d4ed8" }
    ],
  };

  const pagosChart = {
    labels: ["Pagos"],
    datasets: [
      { data: [ingresosTotales], backgroundColor: "#d4a017" }
    ],
  };

  const usuariosChart = {
    labels: ["Usuarios"],
    datasets: [
      { data: [totalUsuarios], backgroundColor: "#10b981" }
    ],
  };

  const morososChart = {
    labels: ["Al día", "Morosos"],
    datasets: [
      {
        data: [totalAlumnos - morosos, morosos],
        backgroundColor: ["#1d4ed8", "#dc2626"]
      }
    ],
  };

  const morosidadRangos = [
    { nombre: "+60 días", cantidad: 12, porcentaje: "32.4%", color: "#7f1d1d" },
    { nombre: "31-60 días", cantidad: 15, porcentaje: "40.5%", color: "#f97316" },
    { nombre: "1-30 días", cantidad: 20, porcentaje: "27.06%", color: "#facc15" },
  ];

  const morosidadChart = {
    labels: morosidadRangos.map(r => r.nombre),
    datasets: [
      {
        data: morosidadRangos.map(r => r.cantidad),
        backgroundColor: morosidadRangos.map(r => r.color)
      }
    ],
  };

  return (
    <div className="dashboard-wrapper">

      <img src="/logo.png" className="watermark-logo" alt="logo" />

      <h1>Bienvenido al Sistema Escolar</h1>

      {/* CARDS PRINCIPALES */}
      <div className="dashboard-cards">

        <div className="dash-card blue">
          <FaUserGraduate className="dash-icon" />
          <div>
            <h2>Alumnos</h2>
            <p>{totalAlumnos}</p>
          </div>
        </div>

        <div className="dash-card gold">
          <FaMoneyBillWave className="dash-icon" />
          <div>
            <h2>Ingresos</h2>
            <p>${ingresosTotales}</p>
          </div>
        </div>

        <div className="dash-card red">
          <FaExclamationTriangle className="dash-icon" />
          <div>
            <h2>Morosos</h2>
            <p>{morosos}</p>
          </div>
        </div>

        {/* CARD DONUT */}
        <div className="dash-card orange">
          <h2>Morosidad</h2>

          <div className="chart-doughnut">
            <Doughnut
              data={morosidadChart}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false }
                }
              }}
            />
          </div>

          <ul className="morosidad-legend">
            {morosidadRangos.map((r, i) => (
              <li key={i}>
                <span className="legend-box" style={{ backgroundColor: r.color }}></span>
                {r.nombre}: {r.cantidad} ({r.porcentaje})
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* GRÁFICOS BARRA */}
      <div className="dashboard-charts">

        <div className="chart-container">
          <h3>Alumnos</h3>
          <Bar data={alumnosChart} options={{ plugins: { legend: { display: false } } }} />
        </div>

        <div className="chart-container">
          <h3>Pagos</h3>
          <Bar data={pagosChart} options={{ plugins: { legend: { display: false } } }} />
        </div>

        <div className="chart-container">
          <h3>Usuarios</h3>
          <Bar data={usuariosChart} options={{ plugins: { legend: { display: false } } }} />
        </div>

        <div className="chart-container">
          <h3>Estado de pagos</h3>
          <Bar data={morososChart} options={{ plugins: { legend: { display: false } } }} />
        </div>

      </div>
    </div>
  );
}