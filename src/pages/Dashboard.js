import React from 'react';
import KpiCard from '../components/KpiCard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from 'recharts';

export default function Dashboard() {
  const datosIngresos = [
    { mes: 'Ene', ingresos: 3200 },
    { mes: 'Feb', ingresos: 4100 },
    { mes: 'Mar', ingresos: 3800 },
    { mes: 'Abr', ingresos: 4500 },
    { mes: 'May', ingresos: 4850 }
  ];

  const datosMetodos = [
    { name: 'Transferencia', value: 55, color: '#0c2540' },
    { name: 'Efectivo', value: 30, color: '#ff9f43' },
    { name: 'Pago Móvil', value: 15, color: '#1d4ed8' }
  ];

  const ultimosPagos = [
    { fecha: '20/05/2026', alumno: 'María González', concepto: 'Mensualidad Mayo 2026', monto: '$35', metodo: 'Transferencia', clase: 'transfer' },
    { fecha: '20/05/2026', alumno: 'Juan Pérez', concepto: 'Mensualidad Mayo 2026', monto: '$35', metodo: 'Efectivo', clase: 'cash' },
    { fecha: '19/05/2026', alumno: 'Carlos Romero', concepto: 'Mensualidad Mayo 2026', monto: '$35', metodo: 'Pago Móvil', clase: 'mobile' },
    { fecha: '19/05/2026', alumno: 'Ana Martínez', concepto: 'Mensualidad Mayo 2026', monto: '$35', metodo: 'Transferencia', clase: 'transfer' },
    { fecha: '18/05/2026', alumno: 'Luis Fernández', concepto: 'Mensualidad Mayo 2026', monto: '$35', metodo: 'Efectivo', clase: 'cash' }
  ];

  const alumnosDeudores = [
    { alumno: 'Juan Pérez', dias: '95 días', deuda: '$140' },
    { alumno: 'María González', dias: '60 días', deuda: '$105' },
    { alumno: 'Carlos Romero', dias: '45 días', deuda: '$70' },
    { alumno: 'Ana Martínez', dias: '30 días', deuda: '$35' },
    { alumno: 'Luis Fernández', dias: '15 días', deuda: '$35' }
  ];

  const proximosVencimientos = [
    { titulo: 'Mensualidad Junio 2026', ano: 'Año Escolar: 2025-2026', fecha: 'Vence el 25/05/2026', cantidad: '312' },
    { titulo: 'Mensualidad Julio 2026', ano: 'Año Escolar: 2025-2026', fecha: 'Vence el 25/06/2026', cantidad: '312' },
    { titulo: 'Mensualidad Agosto 2026', ano: 'Año Escolar: 2025-2026', fecha: 'Vence el 25/07/2026', cantidad: '312' }
  ];

  const botonesAcciones = [
    { texto: 'Generar Facturas', icono: 'fas fa-file-invoice-dollar', clase: '' },
    { texto: 'Registrar Pago', icono: 'fas fa-wallet', clase: '' },
    { texto: 'Estado de Cuenta', icono: 'fas fa-folder-open', clase: '' },
    { texto: 'Reporte de Morosidad', icono: 'fas fa-chart-line', clase: '' },
    { texto: 'Enviar WhatsApp', icono: 'fab fa-whatsapp', clase: 'whatsapp' },
    { texto: 'Generar Constancia', icono: 'fas fa-certificate', clase: '' }
  ];

  return (
    <div className="dashboard-content">
      <div className="welcome-section">
        <h2>¡Bienvenida, Esther!</h2>
        <p>Hoy es {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="kpi-row">
        <KpiCard title="Alumnos Activos" value="312" icon="fas fa-user-friends" type="students" />
        <KpiCard title="Ingresos del mes" value="$4.850" icon="fas fa-dollar-sign" type="income" />
        <KpiCard title="Morosos" value="37" icon="fas fa-exclamation-circle" type="overdue" />
      </div>

      <div className="dashboard-grid">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="grid-main-column">
          <div className="charts-container">
            <div className="chart-box main-chart">
              <h3>Historial de Ingresos</h3>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <BarChart data={datosIngresos} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip />
                    <Bar dataKey="ingresos" fill="#0c2540" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-box side-chart">
              <h3>Métodos de Pago (%)</h3>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={datosMetodos} cx="50%" cy="45%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value">
                      {datosMetodos.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconSize={8} wrapperStyle={{ fontSize: '11px', bottom: 5 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="table-card">
            <div className="table-card-header">
              <h3>Últimos Pagos Registrados</h3>
            </div>
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
                  {ultimosPagos.map((pago, index) => (
                    <tr key={index}>
                      <td>{pago.fecha}</td>
                      <td className="student-name">{pago.alumno}</td>
                      <td>{pago.concepto}</td>
                      <td><strong>{pago.monto}</strong></td>
                      <td>
                        <span className={`payment-badge ${pago.clase}`}>{pago.metodo}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="/pagos" className="table-footer-link">
              Ver todos los pagos <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="grid-side-column">
          <div className="table-card">
            <div className="table-card-header">
              <h3>Alumnos con Mayor Deuda</h3>
            </div>
            <div className="custom-table-wrapper">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Alumno</th>
                    <th>Atraso</th>
                    <th>Deuda Total</th>
                  </tr>
                </thead>
                <tbody>
                  {alumnosDeudores.map((deudor, index) => (
                    <tr key={index}>
                      <td className="student-name">{deudor.alumno}</td>
                      <td className="days-badge">{deudor.dias}</td>
                      <td className="debt-amount">{deudor.deuda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="/cobranza" className="table-footer-link">
              Ver todos los morosos <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* SECCIÓN FORZADA CON ESTILOS INLINE DE REACT */}
          <div className="table-card">
            <div className="table-card-header">
              <h3>Próximos Vencimientos</h3>
            </div>
            <div className="expiry-list">
              {proximosVencimientos.map((vencimiento, index) => (
                <div className="expiry-item" key={index}>
                  <div className="expiry-left">
                    <div className="expiry-icon-box">
                      <i className="far fa-calendar-alt"></i>
                    </div>
                    <div className="expiry-details">
                      <h4>{vencimiento.titulo}</h4>
                      {/* ESTILO INLINE PARA EL AÑO ESCOLAR */}
                      <div style={{ margin: '2px 0 4px 0', fontSize: '0.75rem', color: '#a0aec0', fontWeight: '500' }}>
                        {vencimiento.ano}
                      </div>
                      <p>{vencimiento.fecha}</p>
                    </div>
                  </div>
                  <div className="expiry-right" style={{ textAlign: 'right' }}>
                    {/* ESTILO INLINE PARA EL ICONO + NÚMERO */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', color: '#0c2540' }}>
                      <i className="fas fa-file-invoice" style={{ fontSize: '0.85rem', color: '#64748b' }}></i>
                      <span className="expiry-count">{vencimiento.cantidad}</span>
                    </div>
                    <span className="expiry-label">Facturas</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="/calendario" className="table-footer-link">
              Ver calendario completo <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="table-card">
            <div className="table-card-header">
              <h3>Accesos Rápidos</h3>
            </div>
            <div className="quick-actions-grid">
              {botonesAcciones.map((boton, index) => (
                <button key={index} className={`action-btn ${boton.clase}`}>
                  <i className={boton.icono}></i>
                  <span>{boton.texto}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}