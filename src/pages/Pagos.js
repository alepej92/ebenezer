import React, { useState } from 'react';

export default function Pagos() {
  // Estado para el formulario
  const [alumno, setAlumno] = useState("");
  const [concepto, setConcepto] = useState("Mensualidad Junio 2026");
  const [monto, setMonto] = useState("");
  const [metodo, setMetodo] = useState("Transferencia");
  const [referencia, setReferencia] = useState("");

  // Historial simulado que se actualiza en pantalla
  const [historialPagos, setHistorialPagos] = useState([
    { fecha: "08/06/2026", alumno: "María González", concepto: "Mensualidad Junio 2026", monto: "$35", metodo: "Transferencia" },
    { fecha: "08/06/2026", alumno: "Juan Pérez", concepto: "Mensualidad Junio 2026", monto: "$35", metodo: "Efectivo" },
    { fecha: "07/06/2026", alumno: "Ana Martínez", concepto: "Inscripción", monto: "$60", metodo: "Pago Móvil" }
  ]);

  // Función para procesar el formulario
  const handleRegistrar = (e) => {
    e.preventDefault();
    if (!alumno || !monto) {
      alert("Por favor, completa el nombre del alumno y el monto.");
      return;
    }

    const nuevoPago = {
      fecha: new Date().toLocaleDateString('es-ES'),
      alumno: alumno,
      concepto: concepto,
      monto: `$${monto}`,
      metodo: metodo
    };

    // Agregar al principio del historial
    setHistorialPagos([nuevoPago, ...historialPagos]);

    // Limpiar campos básicos
    setAlumno("");
    setMonto("");
    setReferencia("");
  };

  return (
    <div className="payments-page">
      {/* Encabezado */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Registro de Pagos</h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Ingresa los pagos recibidos y genera recibos al instante.</p>
      </div>

      <div className="payments-grid" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <div className="payment-form-card" style={{ flex: '1', background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#0c2540', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
            <i className="fas fa-wallet" style={{ color: '#ff9f43', marginRight: '8px' }}></i> Datos del Pago
          </h3>
          
          <form onSubmit={handleRegistrar} className="custom-form">
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Alumno *</label>
              <input 
                type="text" 
                placeholder="Ej. Luis Fernández" 
                value={alumno} 
                onChange={(e) => setAlumno(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }}
              />
            </div>

            <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div className="form-group" style={{ flex: '1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Concepto</label>
                <select value={concepto} onChange={(e) => setConcepto(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff' }}>
                  <option>Mensualidad Junio 2026</option>
                  <option>Mensualidad Julio 2026</option>
                  <option>Inscripción</option>
                  <option>Seguro Escolar</option>
                  <option>Otros Conceptos</option>
                </select>
              </div>

              <div className="form-group" style={{ flex: '1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Monto ($) *</label>
                <input 
                  type="number" 
                  placeholder="35" 
                  value={monto} 
                  onChange={(e) => setMonto(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div className="form-row" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div className="form-group" style={{ flex: '1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Método de Pago</label>
                <select value={metodo} onChange={(e) => setMetodo(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff' }}>
                  <option>Transferencia</option>
                  <option>Efectivo</option>
                  <option>Pago Móvil</option>
                </select>
              </div>

              <div className="form-group" style={{ flex: '1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Nro. Referencia (Opcional)</label>
                <input 
                  type="text" 
                  placeholder="Ej. 4829" 
                  value={referencia} 
                  onChange={(e) => setReferencia(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary-action" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              <i className="fas fa-check-circle"></i> Procesar y Registrar Pago
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA: HISTORIAL DEL DÍA */}
        <div className="payment-history-card" style={{ flex: '1.2', background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#0c2540', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
            <i className="fas fa-history" style={{ color: '#64748b', marginRight: '8px' }}></i> Últimos Ingresos Procesados
          </h3>

          <div className="custom-table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Alumno</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Método</th>
                </tr>
              </thead>
              <tbody>
                {historialPagos.map((item, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.fecha}</td>
                    <td className="student-name" style={{ fontWeight: '600', color: '#0c2540' }}>{item.alumno}</td>
                    <td style={{ fontSize: '0.85rem' }}>{item.concepto}</td>
                    <td><strong style={{ color: '#1ea955' }}>{item.monto}</strong></td>
                    <td>
                      <span className={`payment-badge ${item.metodo === 'Efectivo' ? 'cash' : item.metodo === 'Pago Móvil' ? 'mobile' : 'transfer'}`}>
                        {item.metodo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}