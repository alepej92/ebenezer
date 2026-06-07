import React from 'react';

export default function KpiCard({ title, value, icon, type }) {
  return (
    <div className={`kpi-card ${type}`}>
      <div className="kpi-icon-wrapper">
        <i className={icon}></i>
      </div>
      <div className="kpi-card-info">
        <h3>{title}</h3>
        <span className="kpi-value">{value}</span>
        <a href="#detalles" className="kpi-link">
          Ver detalles <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}