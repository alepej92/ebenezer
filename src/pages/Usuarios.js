import React, { useState } from 'react';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Esther Alemán", email: "esther.aleman@ebenezer.edu", rol: "Administrador", estatus: "Activo", avatar: "EA" },
    { id: 2, nombre: "Elena González", email: "elena.g@ebenezer.edu", rol: "Cajero / Cobranza", estatus: "Activo", avatar: "EG" }
  ]);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("Cajero / Cobranza");

  const guardarUsuario = (e) => {
    e.preventDefault();
    if (!nombre || !email) {
      alert("Por favor rellena los datos mínimos.");
      return;
    }

    const iniciales = nombre.split(" ").map(n => n[0]).join("").toUpperCase().substring(0,2);

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: nombre,
      email: email,
      rol: rol,
      estatus: "Activo",
      avatar: iniciales || "US"
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    setNombre("");
    setEmail("");
    setModalAbierto(false);
  };

  return (
    <div className="users-page">
      <div className="page-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Control de Usuarios</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Administra las cuentas del personal y gestiona los permisos.</p>
        </div>
        <button className="btn-primary-action" onClick={() => setModalAbierto(true)}>
          <i className="fas fa-user-shield"></i> Nuevo Usuario
        </button>
      </div>

      <div className="users-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {usuarios.map((user) => (
          <div key={user.id} className="user-profile-card" style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', textAlign: 'center', position: 'relative', border: '1px solid #e2e8f0' }}>
            <span className={`status-badge ${user.estatus === 'Activo' ? 'active' : 'inactive'}`} style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.7rem' }}>{user.estatus}</span>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#0c2540', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '700', margin: '10px auto 16px auto' }}>{user.avatar}</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#0c2540' }}>{user.nombre}</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.8rem', color: '#64748b' }}>{user.email}</p>
            <div style={{ background: '#f1f5f9', color: '#334155', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600', display: 'inline-block', marginBottom: '20px' }}>{user.rol}</div>
          </div>
        ))}
      </div>

      {/* MODAL DE NUEVO USUARIO */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Crear Cuenta de Personal</h3>
            <form onSubmit={guardarUsuario}>
              <div className="modal-field">
                <label>Nombre Completo *</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Carlos Gómez" />
              </div>
              <div className="modal-field">
                <label>Correo Electrónico Institucional *</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nombre@ebenezer.edu" />
              </div>
              <div className="modal-field">
                <label>Rol de Operador</label>
                <select value={rol} onChange={(e) => setRol(e.target.value)}>
                  <option>Cajero / Cobranza</option>
                  <option>Administrador</option>
                  <option>Directivo</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setModalAbierto(false)}>Cancelar</button>
                <button type="submit" className="btn-submit-modal">Crear Usuario</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}