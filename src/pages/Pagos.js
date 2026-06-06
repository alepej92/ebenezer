import React, { useState } from "react";

export default function Pagos() {
  const [pagos, setPagos] = useState([
    { id: 1, alumno: "Juan Pérez", monto: "$50", fecha: "2026-06-01" },
    { id: 2, alumno: "María Gómez", monto: "$75", fecha: "2026-06-02" },
    { id: 3, alumno: "Carlos López", monto: "$50", fecha: "2026-06-03" },
  ]);

  return (
    <div>
      <h1>Pagos</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Alumno</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Monto</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{pago.id}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{pago.alumno}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{pago.monto}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{pago.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}