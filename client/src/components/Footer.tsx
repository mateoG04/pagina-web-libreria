export const Footer = () => (
  <footer style={{ background: "#222", color: "#fff", marginTop: 40 }}>
    <div className="container py-4">
      <div className="row gy-4">
        <div className="col-md-4">
          <h6 className="mb-3">MÉTODO DE PAGO</h6>
          <img src="/images/pagos.png" alt="Métodos de pago" style={{ maxWidth: 250 }} />
        </div>
        <div className="col-md-4">
          <h6 className="mb-3">CONTACTANOS</h6>
          <div style={{ fontSize: 15 }}>
            Av. Meeks 24. Primer Piso. Galería Gallardón, Lomas de Zamora<br />
            11-2250-9789<br />
            tiendaonline@zerocomics.com.ar<br />
            <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>Botón de arrepentimiento</a>
          </div>
        </div>
        <div className="col-md-4">
          <h6 className="mb-3">REDES SOCIALES</h6>
          <div style={{ fontSize: 22 }}>
            <a href="#" style={{ color: "#fff", marginRight: 16 }}><i className="bi bi-facebook"></i></a>
            <a href="#" style={{ color: "#fff", marginRight: 16 }}><i className="bi bi-instagram"></i></a>
          </div>
          <div className="mt-3">
            <img src="/images/envios.png" alt="Métodos de envío" style={{ maxWidth: 120 }} />
          </div>
        </div>
      </div>
      <div className="text-center mt-4" style={{ fontSize: 13, opacity: 0.7 }}>
        CREADO CON <b>TIENDA NEGOCIO</b>
      </div>
    </div>
  </footer>
);