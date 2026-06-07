import React, { useState } from 'react';

export default function Alumnos() {
  // 1. Lista inicial de alumnos (Datos en memoria temporal de React)
  const [listaAlumnos, setListaAlumnos] = useState([
    { id: "ALU-2026-001", nombre: "María González", anoEscolar: "2025-2026", seccion: "A", representante: "Elena González", estatus: "Activo" },
    { id: "ALU-2026-002", nombre: "Juan Pérez", anoEscolar: "2025-2026", seccion: "B", representante: "Pedro Pérez", estatus: "Activo" },
    { id: "ALU-2026-003", nombre: "Carlos Romero", anoEscolar: "2025-2026", seccion: "A", representante: "Luisa Romero", estatus: "Inactivo" },
    { id: "ALU-2026-004", nombre: "Ana Martínez", anoEscolar: "2025-2026", seccion: "C", representante: "José Martínez", estatus: "Activo" }
  ]);

  // 2. Estados para el buscador y el Modal flotante
  const [busqueda, setBusqueda] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  
  // 3. Estados para capturar los datos del nuevo alumno
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoRepresentante, setNuevoRepresentante] = useState("");
  const [nuevaSeccion, setNuevaSeccion] = useState("A");

  // 4. Filtrado en tiempo real para la barra de búsqueda
  const alumnosFiltrados = listaAlumnos.filter(alumno => 
    alumno.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    alumno.id.toLowerCase().includes(busqueda.toLowerCase())
  );

  // 5. FUNCIÓN CRÍTICA: Guarda el alumno sin recargar el navegador
  const guardarAlumno = (e) => {
    e.preventDefault(); // <-- CORRECCIÓN: Detiene el autorefresh del navegador

    if (!nuevoNombre.trim() || !nuevoRepresentante.trim()) {
      alert("Por favor, rellena el nombre del alumno y del representante.");
      return;
    }

    // Estructura del nuevo estudiante
    const nuevoAlumno = {
      id: `ALU-2026-00${listaAlumnos.length + 1}`,
      nombre: nuevoNombre,
      anoEscolar: "2025-2026",
      seccion: nuevaSeccion,
      representante: nuevoRepresentante,
      estatus: "Activo"
    };

    // Insertar en la lista existente
    setListaAlumnos([...listaAlumnos, nuevoAlumno]);
    
    // Limpiar el formulario y cerrar la ventana flotante
    setNuevoNombre("");
    setNuevoRepresentante("");
    setNuevaSeccion("A");
    setModalAbierto(false); 
  };

  return (
    <div className="students-page">
      {/* Encabezado */}
      <div className="page-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Gestión de Alumnos</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Consulta, edita y registra los estudiantes del instituto.</p>
        </div>
        {/* CORRECCIÓN: Asegurar el disparo del estado con la sintaxis exacta */}
        <button className="btn-primary-action" onClick={() => setModalAbierto(true)}>
          <i className="fas fa-user-plus"></i> Nuevo Alumno
        </button>
      </div>

      {/* Buscador */}
      <div className="filter-card">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input 
            type="text" 
            placeholder="Buscar por nombre o ID del alumno..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Tabla de Alumnos */}
      <div className="table-card" style={{ marginTop: '20px' }}>
        <div className="custom-table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID Alumno</th>
                <th>Nombre Completo</th>
                <th>Año Escolar</th>
                <th>Sección</th>
                <th>Representante</th>
                <th>Estatus</th>
                <th style={{ textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnosFiltrados.length > 0 ? (
                alumnosFiltrados.map((alumno, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: '500', color: '#64748b' }}>{alumno.id}</td>
                    <td className="student-name">{alumno.nombre}</td>
                    <td>{alumno.anoEscolar}</td>
                    <td style={{ textAlign: 'center' }}>{alumno.seccion}</td>
                    <td>{alumno.representante}</td>
                    <td>
                      <span className={`status-badge ${alumno.estatus === 'Activo' ? 'active' : 'inactive'}`}>
                        {alumno.estatus}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div className="actions-buttons-flex" style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button className="action-row-btn edit" onClick={() => alert(`Ficha de ${alumno.nombre}`)}>
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                    No se encontraron alumnos que coincidan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* VENTANA FLOTANTE (MODAL) */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Registrar Nuevo Alumno</h3>
            <form onSubmit={guardarAlumno}>
              <div className="modal-field">
                <label>Nombre del Alumno *</label>
                <input 
                  type="text" 
                  value={nuevoNombre} 
                  onChange={(e) => setNuevoNombre(e.target.value)} 
                  placeholder="Ej. Carlos Mendoza" 
                  required
                />
              </div>
              <div className="modal-field">
                <label>Representante Legal *</label>
                <input 
                  type="text" 
                  value={nuevoRepresentante} 
                  onChange={(e) => setNuevoRepresentante(e.target.value)} 
                  placeholder="Ej. Mariana Mendoza" 
                  required
                />
              </div>
              <div className="modal-field">
                <label>Sección Asignada</label>
                <select value={nuevaSeccion} onChange={(e) => setNuevaSeccion(e.target.value)}>
                  <option value="A">Sección A</option>
                  <option value="B">Sección B</option>
                  <option value="C">Sección C</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setModalAbierto(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-submit-modal">
                  Guardar Alumno
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}