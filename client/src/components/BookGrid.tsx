import { Book } from "../assets/types/Books";
import { useNavigate } from "react-router-dom";

export function BookGrid({ books }: { books: Book[] }) {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <div className="row">
        {books.map((book) => {
          const discount = typeof book.descount === "number" ? book.descount : 0;
          const hasDiscount = discount > 0;
          const finalPrice =
            typeof book.price === "number" && hasDiscount
              ? Math.round(book.price * (1 - discount / 100))
              : book.price;
          const cuotas = 3;
          return (
            <div
              key={book._id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <div
                className="card shadow-sm"
                style={{
                  width: 260,
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={() => navigate(`/libros/${book._id}`)}
              >
                <div
                  style={{
                    width: "100%",
                    height: 340,
                    background: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`https://pagina-web-libreria.onrender.com/public/images/${book.imageFront}`}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="p-3" style={{ width: "100%" }}>
                  <div
                    className="fw-bold text-center"
                    style={{ fontSize: 16 }}
                  >
                    {book.title}
                  </div>
                  <div
                    className="text-muted text-center mb-2"
                    style={{ fontSize: 14 }}
                  >
                    {book.author}
                  </div>
                  {/* Oferta */}
                  {hasDiscount ? (
                    <div className="text-center mb-1">
                      <span
                        style={{
                          color: "#888",
                          textDecoration: "line-through",
                          fontSize: 15,
                          marginRight: 8,
                        }}
                      >
                        {typeof book.price === "number"
                          ? `$${book.price.toLocaleString("es-AR")}`
                          : "Precio no disponible"}
                      </span>
                      <span
                        className="fw-bold"
                        style={{ color: "#d32f2f", fontSize: 20 }}
                      >
                        {typeof finalPrice === "number"
                          ? `$${finalPrice.toLocaleString("es-AR")}`
                          : "Precio no disponible"}
                      </span>
                      <span
                        className="badge bg-danger ms-2"
                        style={{ fontSize: 13 }}
                      >
                        -{discount}%
                      </span>
                    </div>
                  ) : (
                    <div
                      className="fw-bold text-center"
                      style={{ fontSize: 20 }}
                    >
                      {typeof book.price === "number"
                        ? `$${book.price.toLocaleString("es-AR")}`
                        : "Precio no disponible"}
                    </div>
                  )}
                  {/* Cuotas */}
                  <div
                    className="text-center"
                    style={{ fontSize: 13, color: "#444" }}
                  >
                    Hasta <b>{cuotas}</b> cuotas sin interés de{" "}
                    <b>
                      {typeof finalPrice === "number"
                        ? `$${Math.round(finalPrice / cuotas).toLocaleString("es-AR")}`
                        : "Precio no disponible"}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}