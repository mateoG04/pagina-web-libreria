import { Book } from '../types/Books';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => (
  <div className="card h-100 shadow-sm">
    <img
      src={`/images/${book.imageFront}`}
      className="card-img-top"
      alt={book.title}
      style={{ objectFit: 'cover', height: '250px' }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{book.title}</h5>
      <p className="card-text text-muted">{book.author}</p>
      <p className="card-text">{book.description}</p>
      <div className="mt-auto fw-bold">${book.price.toFixed(2)}</div>
      <Link to={`/libros/${book._id}`} className="btn btn-primary mt-2">
        Ver detalles
      </Link>
    </div>
  </div>
);