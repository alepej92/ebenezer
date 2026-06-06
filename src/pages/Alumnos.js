import React, { useState } from "react";

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState([
    { id: 1, nombre: "Juan Pérez", grado: "5° Primaria" },
    { id: 2, nombre: "María Gómez", grado: "3° Secundaria" },
    { id: 3, nombre: "Carlos López", grado: "1° Primaria" },
  ]);

  return (
    <div>
      <h1>Alumnos</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Nombre</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Grado</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{alumno.id}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{alumno.nombre}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{alumno.grado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}