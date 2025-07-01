import { Link } from "react-router-dom";
import { Book } from "../assets/types/Books";

interface RelatedBooksProps {
  books: Book[];
  excludeId?: string;
}

export const RelatedBooks = ({ books, excludeId }: RelatedBooksProps) => {
  // Mezcla aleatoriamente y toma 3 (para que no sean siempre los mismos)
  const relacionados = books
    .filter(b => b._id !== excludeId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="my-5">
      <h3 className="text-center mb-4">Te puede interesar también</h3>
      <div className="row justify-content-center">
        {relacionados.map(book => (
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center" key={book._id}>
            <Link to={`/libros/${book._id}`} className="card h-100 shadow-sm text-decoration-none" style={{ width: 220 }}>
              <img
                src={`https://pagina-web-libreria.onrender.com/public/images/${book.imageFront}`}
                className="card-img-top"
                alt={book.title}
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">{book.author}</p>
                <div className="mt-auto fw-bold">
                  {typeof book.price === "number" ? `$${book.price.toLocaleString()}` : "Precio no disponible"}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};