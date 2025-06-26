import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Ejemplo de productos de merchandising
const merchProducts = [
  {
    id: 1,
    name: "Taza Kamen Rider",
    price: 8500,
    image: "/images/taza.jpeg",
    cuotas: "Hasta 3 cuotas sin interés de $2.833",
  },
  {
    id: 2,
    name: "Esferas del Dragon (Pack 7 esferas)",
    price: 45000,
    image: "/images/auto.png",
    cuotas: "Hasta 3 cuotas sin interés de $15.000",
  },
  {
    id: 3,
    name: "Esfera del Dragon 4 Estrellas Grande",
    price: 40000,
    image: "/images/auto2.jpeg",
    cuotas: "Hasta 3 cuotas sin interés de $13.333",
  },
  {
    id: 4,
    name: "Medias Soquetes Naruto - Akatsuki",
    price: 2500,
    image: "/images/autorojo.jpg",
    cuotas: "Hasta 3 cuotas sin interés de $833",
  },
  {
    id: 5,
    name: "Medias Soquetes Naruto - Akatsuki",
    price: 2500,
    image: "/images/autoblanco.jpg",
    cuotas: "Hasta 3 cuotas sin interés de $833",
  },
  {
    id: 6,
    name: "Medias Soquetes Naruto - Akatsuki",
    price: 2500,
    image: "/images/merch/medias-naruto.jpg",
    cuotas: "Hasta 3 cuotas sin interés de $833",
  },
  // Puedes agregar más productos aquí
];

export function MerchCarousel() {
  const [start, setStart] = useState(0);
  const visible = 4; // cantidad de productos visibles

  const handlePrev = () => setStart((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStart((prev) =>
      prev + visible < merchProducts.length ? prev + 1 : 0
    );

  // Auto-move effect
  useEffect(() => {
    if (merchProducts.length <= visible) return;
    const interval = setInterval(() => {
      setStart((prev) =>
        prev + visible < merchProducts.length ? prev + 1 : 0
      );
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [visible]);

  // Ancho de cada tarjeta + gap (ajusta si cambias el diseño)
  const cardWidth = 220;
  const gap = 32;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4" style={{ letterSpacing: 1 }}>MERCHANDISING</h2>
        <div className="position-relative" style={{ overflow: "hidden" }}>
          {/* Flecha izquierda */}
          {start > 0 && (
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: -30,
                top: "40%",
                background: "none",
                border: "none",
                fontSize: 32,
                cursor: "pointer",
                zIndex: 2,
              }}
              aria-label="Anterior"
            >
              &#60;
            </button>
          )}
          {/* Carrusel deslizable */}
          <div
            style={{
              display: "flex",
              gap: gap,
              transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
              transform: `translateX(-${start * (cardWidth + gap)}px)`,
              willChange: "transform",
            }}
          >
            {merchProducts.map(product => (
              <div key={product.id} className="text-center" style={{ width: cardWidth, flexShrink: 0 }}>
                <Link to={`/merch/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: "contain",
                      borderRadius: 12,
                      background: "#fff",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    }}
                  />
                </Link>
                <div className="mt-3">
                  <button
                    style={{
                      background: "#7c3aed",
                      border: "none",
                      borderRadius: "50%",
                      width: 38,
                      height: 38,
                      color: "#fff",
                      fontSize: 20,
                      marginBottom: 8,
                      boxShadow: "0 2px 8px rgba(124,58,237,0.10)",
                    }}
                  >
                    <i className="bi bi-bag"></i>
                  </button>
                  <div style={{ fontWeight: 500 }}>{product.name}</div>
                  <div className="fw-bold mt-2">${product.price.toLocaleString("es-AR")}</div>
                  <div style={{ fontSize: 13, color: "#444" }}>{product.cuotas}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Flecha derecha */}
          {start + visible < merchProducts.length && (
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                right: -30,
                top: "40%",
                background: "none",
                border: "none",
                fontSize: 32,
                cursor: "pointer",
                zIndex: 2,
              }}
              aria-label="Siguiente"
            >
              &#62;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}