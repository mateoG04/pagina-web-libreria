import { Book } from "../assets/types/Books";
import { useNavigate } from "react-router-dom";

export function NewReleases({ books }: { books: Book[] }) {
  const navigate = useNavigate();

  // Filtra los libros nuevos (isNew === true) o los últimos 3 agregados
  const novedades = books.filter(b => b.isNew).slice(-3).reverse();

  if (!novedades.length) {
    return <div className="text-center my-5">No hay novedades.</div>;
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Últimas Novedades</h2>
        <div className="row">
          {novedades.map((book) => (
            <div key={book._id} className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-sm cursor-pointer"
                onClick={() => navigate(`/libros/${book._id}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`https://pagina-web-libreria.onrender.com/public/images/${book.imageFront}`}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-muted">{book.author}</p>
                  <p className="card-text">
                    {typeof book.price === "number" ? `$${book.price.toLocaleString("es-AR")}` : "Precio no disponible"}
                  </p>
                  <button className="btn btn-primary mt-2" onClick={e => {
                    e.stopPropagation();
                    navigate(`/libros/${book._id}`);
                  }}>
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}