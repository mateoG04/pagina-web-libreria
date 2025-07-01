import { Book } from "../assets/types/Books";
import { useNavigate } from "react-router-dom";

export function BookGrid({ books }: { books: Book[] }) {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/libros/${book._id}`)}
            >
              <img
                src={`https://pagina-web-libreria.onrender.com/public/images/${book.imageFront}`}
                className="card-img-top"
                alt={book.title}
                style={{ height: 350, objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">{book.author}</p>
                <div className="fw-bold">
                  {typeof book.price === "number" ? `$${book.price.toLocaleString("es-AR", { minimumFractionDigits: 2 })}` : "Precio no disponible"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}