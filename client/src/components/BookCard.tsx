import { Book } from '../assets/types/Books';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="card h-100 shadow-sm">
      <div
        style={{
          width: '100%',
          height: '250px',
          overflow: 'hidden',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          background: '#f8f8f8'
        }}
      >
        <img
          src={book.image}
          alt={book.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted">{book.author}</p>
        <p className="card-text">{book.description}</p>
        <div className="mt-auto fw-bold">${book.price.toFixed(2)}</div>
        <a href={`/libros/${book.id}`} className="btn btn-primary mt-2">
          Ver detalles
        </a>
      </div>
    </div>
  );
}