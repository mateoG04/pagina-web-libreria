export function ShippingBanner() {
  return (
    <div style={{ background: "#111", color: "#fff", padding: "10px 0", fontWeight: 600, fontSize: 18, textAlign: "center" }}>
      ENVÍO GRATIS A SUCURSAL EN COMPRAS SUPERIORES A $50.000! &nbsp;
      <span style={{ fontWeight: 400, fontSize: 16 }}>
        ENVIAMOS POR{" "}
        <img
          src="/images/correo-argentino.png"
          alt="Correo Argentino"
          style={{ height: 24, verticalAlign: "middle" }}
        />
      </span>
    </div>
  );
}