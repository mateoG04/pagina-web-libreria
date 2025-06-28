import { useNavigate } from 'react-router-dom';
import { Book } from "../types/Books";

export function BookList({ books }: { books: Book[] }) {
  const navigate = useNavigate();

  if (!books.length) {
    return <div className="text-center my-5">Cargando libros...</div>;
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Nuestros Libros</h1>
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <div 
              className="card h-100 shadow-sm cursor-pointer"
              onClick={() => navigate(`/libros/${book._id}`)}
            >
              <img 
                src={`/images/${book.imageFront}`}
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
  );
}