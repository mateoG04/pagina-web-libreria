import { Book } from "../assets/types/Books";
import { BookGrid } from "./BookGrid";

export function NewReleases({ books }: { books: Book[] }) {
  // Filtra los libros nuevos (isNew === true) o los últimos 3 agregados
  const novedades = books.filter(b => b.isNew).slice(-3).reverse();

  if (!novedades.length) {
    return <div className="text-center my-5">No hay novedades.</div>;
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Últimas Novedades</h2>
        <BookGrid books={novedades} />
      </div>
    </section>
  );
}