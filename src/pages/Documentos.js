import React from 'react';

export default function Documentos() {
  const archivos = [
    { nombre: "Planilla_Inscripcion_2026.pdf", tamano: "1.2 MB", tipo: "PDF", icono: "fa-file-pdf", color: "#dc3545" },
    { nombre: "Reglamento_Interno_Ebenezer.pdf", tamano: "850 KB", tipo: "PDF", icono: "fa-file-pdf", color: "#dc3545" },
    { nombre: "Requisitos_Admision_Nuevos.pdf", tamano: "420 KB", tipo: "PDF", icono: "fa-file-pdf", color: "#dc3545" },
    { nombre: "Cronograma_Actividades_Lapso1.xlsx", tamano: "2.4 MB", tipo: "Excel", icono: "fa-file-excel", color: "#1ea955" }
  ];

  return (
    <div className="documentos-page">
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.6rem', color: '#0c2540' }}>Gestor de Documentos</h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>Accede y descarga los formatos oficiales, planillas y normativas del colegio.</p>
      </div>

      <div className="docs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {archivos.map((doc, index) => (
          <div key={index} className="doc-card" style={{ background: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', gap: '14px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <i className={`fas ${doc.icono}`} style={{ fontSize: '2.2rem', color: doc.color }}></i>
              <div style={{ overflow: 'hidden' }}>
                <h4 style={{ margin: 0, fontSize: '0.88rem', color: '#0c2540', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} title={doc.nombre}>
                  {doc.nombre}
                </h4>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{doc.tamano}</span>
              </div>
            </div>
            
            <button className="btn-primary-action" style={{ width: '100%', justifyContent: 'center', padding: '8px', fontSize: '0.8rem', background: '#f1f5f9', color: '#334155' }} onClick={() => alert(`Descargando archivo: ${doc.nombre}`)}>
              <i className="fas fa-download"></i> Descargar Archivo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}