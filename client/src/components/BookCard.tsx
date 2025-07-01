import { Link } from "react-router-dom";
import { Book } from "../assets/types/Books";
import "../BookCard.css"; // Importa tu CSS personalizado

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => (
  <Link to={`/books/${book._id}`} className="card book-card shadow-sm text-decoration-none h-100">
    <div className="book-card-img-wrapper">
      <img
        src={`https://pagina-web-libreria.onrender.com/public/images/${book.imageFront}`}
        className="card-img-top book-card-img"
        alt={book.title}
      />
    </div>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title mb-1">{book.title}</h5>
      <p className="card-text text-muted mb-2">{book.author}</p>
      <p className="card-text fw-bold mb-0">
        ${typeof book.price === "number" ? book.price.toLocaleString() : "Precio no disponible"}
      </p>
    </div>
  </Link>
);