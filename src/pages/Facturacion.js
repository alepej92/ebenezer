import React, { useState } from 'react';

export default function Facturacion() {
  const [facturas] = useState([
    { nro: "FAC-00214", fecha: "08/06/2026", cliente: "Elena González", alumno: "María González", monto: "$35.00", estatus: "Pagada" },
    { nro: "FAC-00213", fecha: "08/06/2026", cliente: "Pedro Pérez", alumno: "Juan Pérez", monto: "$35.00", estatus: "Pagada" },
    { nro: "FAC-00212", fecha: "05/06/2026", cliente: "Luisa Romero", alumno: "Carlos Romero", monto: "$70.00", estatus: "Pendiente" },
    { nro: "FAC-00211", fecha: "01/06/2026", cliente: "José Martínez", alumno: "Ana Martínez", monto: "$60.00", estatus: "Anulada" }
  ]);

  return (
    <div className="facturacion-page">
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Módulo de Facturación</h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Historial de comprobantes fiscales emitidos y control de recaudación.</p>
      </div>

      <div className="table-card">
        <div className="custom-table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Nro. Factura</th>
                <th>Fecha Emisión</th>
                <th>Representante / Cliente</th>
                <th>Alumno Asociado</th>
                <th>Monto Total</th>
                <th>Estatus</th>
                <th style={{ textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {facturas.map((fac, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: '600', color: '#0c2540' }}>{fac.nro}</td>
                  <td style={{ color: '#64748b', fontSize: '0.85rem' }}>{fac.fecha}</td>
                  <td>{fac.cliente}</td>
                  <td className="student-name">{fac.alumno}</td>
                  <td style={{ fontWeight: '600' }}>{fac.monto}</td>
                  <td>
                    <span className={`status-badge ${fac.estatus === 'Pagada' ? 'active' : fac.estatus === 'Anulada' ? 'inactive' : 'warning'}`} style={{
                      backgroundColor: fac.estatus === 'Pendiente' ? '#fef3c7' : undefined,
                      color: fac.estatus === 'Pendiente' ? '#d97706' : undefined
                    }}>
                      {fac.estatus}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="action-row-btn view" style={{ margin: '0 auto' }} onClick={() => alert(`Imprimiendo copia de la ${fac.nro}`)}>
                      <i className="fas fa-print"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}