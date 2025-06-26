import { Book } from "../assets/types/Books";
import { useNavigate } from "react-router-dom";

export function NewReleases({ books }: { books: Book[] }) {
  const navigate = useNavigate();

  // Filtra los libros nuevos según tu lógica, aquí un ejemplo:
  // Supón que los nuevos tienen una propiedad isNew o los últimos 3 agregados
  const novedades = books.slice(-3).reverse(); // últimos 3 libros

  if (!novedades.length) {
    return <div className="text-center my-5">No hay novedades.</div>;
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Últimas Novedades</h2>
        <div className="row">
          {novedades.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div
                className="card h-100 shadow-sm cursor-pointer"
                onClick={() => navigate(`/libros/${book.id}`)}
              >
                <img
                  src={`https://pagina-web-libreria.onrender.com/api/books/images/${book.image}`}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-muted">{book.author}</p>
                  <p className="card-text">${book.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}