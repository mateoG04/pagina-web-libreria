import { Book } from "../assets/types/Books";
import { BookCard } from "./BookCard";

interface RelatedBooksProps {
  books: Book[];
  excludeId?: string; // <-- Cambia a string
}

export const RelatedBooks = ({ books, excludeId }: RelatedBooksProps) => {
  // Filtra el libro actual y toma 3 aleatorios
  const relacionados = books.filter(b => b._id !== excludeId).slice(0, 3);

  return (
    <section className="my-5">
      <h3 className="text-center mb-4">Te puede interesar también</h3>
      <div className="row justify-content-center">
        {relacionados.map(book => (
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center" key={book._id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </section>
  );
};