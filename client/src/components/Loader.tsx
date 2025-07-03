import React from "react";

export const Loader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh"
  }}>
    <div className="spinner-border text-primary" role="status" style={{ width: 60, height: 60 }}>
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);