import React from 'react';

export default function Topbar() {
  return (
    <div className="topbar">
      <h1 className="system-title">Sistema Administrativo</h1>
      
      <div className="user-actions">
        {/* Icono de notificaciones con el indicador de mensajes pendientes */}
        <div className="notifications-icon">
          <i className="fas fa-bell"></i>
          <span className="badge">3</span>
        </div>
        
        {/* Información del perfil de usuario */}
        <div className="user-profile">
          <div className="avatar-placeholder">
            <i className="fas fa-user"></i>
          </div>
          <div className="user-info">
            <span className="name">Luzcita Alemán</span>
            <span className="role">Administrador</span>
          </div>
          <i className="fas fa-chevron-down arrow-icon"></i>
        </div>
      </div>
    </div>
  );
}