import { useParams, Link } from "react-router-dom";

// Copia el array merchProducts aquí o impórtalo si lo tienes en otro archivo
const merchProducts = [
  {
    id: 1,
    name: "Taza Kamen Rider",
    price: 8500,
    image: "/images/taza.jpeg",
    cuotas: "Hasta 3 cuotas sin interés de $2.833",
  },
  // ...otros productos
];

export function MerchDetail() {
  const { id } = useParams();
  const product = merchProducts.find(p => String(p.id) === id);

  if (!product) return <div className="container py-5">Producto no encontrado.</div>;

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", maxWidth: 400, borderRadius: 12, background: "#fff" }}
          />
        </div>
        <div className="col-md-7">
          <h2>{product.name}</h2>
          <div className="fs-3 fw-bold my-3" style={{ color: "#7c3aed" }}>
            ${product.price.toLocaleString("es-AR")}
          </div>
          <div className="mb-3">{product.cuotas}</div>
          <Link to="/merch" className="btn btn-outline-primary mt-3">Volver al Merch</Link>
        </div>
      </div>
    </div>
  );
}