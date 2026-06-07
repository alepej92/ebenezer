import React, { useState } from 'react';

export default function Configuracion() {
  const [mensualidad, setMensualidad] = useState("35");
  const [instituto, setInstituto] = useState("Colegio Ebenezer");
  const [telefono, setTelefono] = useState("+58 212-5555555");

  const manejarGuardar = (e) => {
    e.preventDefault();
    alert("⚙️ Configuración del sistema guardada con éxito.");
  };

  return (
    <div className="configuracion-page">
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Configuración General</h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Ajusta los parámetros globales de la plataforma, aranceles y datos institucionales.</p>
      </div>

      <div className="table-card" style={{ maxWidth: '550px', background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <form onSubmit={manejarGuardar}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#0c2540', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
            Parámetros del Instituto
          </h3>
          
          <div className="modal-field" style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Nombre de la Institución</label>
            <input type="text" value={instituto} onChange={(e) => setInstituto(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
          </div>

          <div className="modal-field" style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Costo de la Mensualidad Base ($)</label>
            <input type="number" value={mensualidad} onChange={(e) => setMensualidad(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
          </div>

          <div className="modal-field" style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Teléfono de Soporte / Administración</label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
          </div>

          <button type="submit" className="btn-primary-action" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
            <i className="fas fa-save"></i> Guardar Cambios del Sistema
          </button>
        </form>
      </div>
    </div>
  );
}