import React, { useState } from 'react';

export default function Cobranza() {
  // Lista simulada de cuentas por cobrar (Sin setDeudores para limpiar advertencias de ESLint)
  const [deudores] = useState([
    { id: "ALU-2026-002", alumno: "Juan Pérez", representante: "Pedro Pérez", mesesVencidos: 4, diasAtraso: 95, deudaTotal: 140 },
    { id: "ALU-2026-001", alumno: "María González", representante: "Elena González", mesesVencidos: 3, diasAtraso: 60, deudaTotal: 105 },
    { id: "ALU-2026-003", alumno: "Carlos Romero", representante: "Luisa Romero", mesesVencidos: 2, diasAtraso: 45, deudaTotal: 70 },
    { id: "ALU-2026-004", alumno: "Ana Martínez", representante: "José Martínez", mesesVencidos: 1, diasAtraso: 30, deudaTotal: 35 },
    { id: "ALU-2026-005", alumno: "Luis Fernández", representante: "Marta Fernández", mesesVencidos: 1, diasAtraso: 15, deudaTotal: 35 }
  ]);

  const [filtroBusqueda, setFiltroBusqueda] = useState("");

  // Filtrado en tiempo real por nombre de alumno o ID
  const deudoresFiltrados = deudores.filter(d => 
    d.alumno.toLowerCase().includes(filtroBusqueda.toLowerCase()) ||
    d.id.toLowerCase().includes(filtroBusqueda.toLowerCase())
  );

  // Función para simular el aviso de cobro
  const enviarRecordatorio = (alumno) => {
    alert(`Enviando recordatorio de pago vía WhatsApp/Correo a la representación de: ${alumno}`);
  };

  return (
    <div className="cobranza-page">
      {/* Encabezado */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Control de Cobranza</h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Monitorea las cuentas pendientes, retrasos y emite notificaciones de cobro.</p>
      </div>

      {/* Fila de mini-métricas de cobranza */}
      <div className="cobranza-metrics" style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
        <div style={{ flex: 1, background: '#fff', padding: '16px 20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', borderLeft: '4px solid #dc3545' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Total en Mora</span>
          <h3 style={{ margin: '6px 0 0 0', fontSize: '1.5rem', color: '#dc3545' }}>$385</h3>
        </div>
        <div style={{ flex: 1, background: '#fff', padding: '16px 20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', borderLeft: '4px solid #ff9f43' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Alumnos Solventes</span>
          <h3 style={{ margin: '6px 0 0 0', fontSize: '1.5rem', color: '#0c2540' }}>275 <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal' }}>(88%)</span></h3>
        </div>
        <div style={{ flex: 1, background: '#fff', padding: '16px 20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', borderLeft: '4px solid #1ea955' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Casos Críticos (+90 días)</span>
          <h3 style={{ margin: '6px 0 0 0', fontSize: '1.5rem', color: '#334155' }}>1</h3>
        </div>
      </div>

      {/* Buscador */}
      <div className="filter-card" style={{ marginBottom: '20px' }}>
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input 
            type="text" 
            placeholder="Buscar moroso por nombre o ID..." 
            value={filtroBusqueda}
            onChange={(e) => setFiltroBusqueda(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Tabla de Morosidad */}
      <div className="table-card">
        <div className="custom-table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID Alumno</th>
                <th>Alumno</th>
                <th>Representante</th>
                <th style={{ textAlign: 'center' }}>Meses Vencidos</th>
                <th style={{ textAlign: 'center' }}>Días de Atraso</th>
                <th>Deuda Total</th>
                <th style={{ textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {deudoresFiltrados.length > 0 ? (
                deudoresFiltrados.map((item, index) => (
                  <tr key={index}>
                    <td style={{ color: '#64748b', fontSize: '0.85rem' }}>{item.id}</td>
                    <td className="student-name" style={{ fontWeight: '600' }}>{item.alumno}</td>
                    <td>{item.representante}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span style={{ background: '#fef3c7', color: '#d97706', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>
                        {item.mesesVencidos}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="days-badge" style={{ backgroundColor: item.diasAtraso >= 90 ? '#fde8e8' : '#fff3cd', color: item.diasAtraso >= 90 ? '#dc3545' : '#856404', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600' }}>
                        {item.diasAtraso} días
                      </span>
                    </td>
                    <td style={{ fontWeight: '700', color: '#dc3545' }}>${item.deudaTotal}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button 
                        onClick={() => enviarRecordatorio(item.alumno)}
                        className="action-row-btn view" 
                        style={{ margin: '0 auto', width: 'auto', padding: '0 10px', gap: '6px', fontSize: '0.8rem' }}
                        title="Notificar Deuda"
                      >
                        <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i> Notificar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                    No se encontraron registros que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}