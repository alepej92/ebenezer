import React, { useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Admin", rol: "Administrador" },
    { id: 2, nombre: "Secretaria1", rol: "Secretaria" },
    { id: 3, nombre: "Profesor1", rol: "Profesor" },
  ]);

  return (
    <div>
      <h1>Usuarios</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Nombre</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{user.id}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{user.nombre}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{user.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}