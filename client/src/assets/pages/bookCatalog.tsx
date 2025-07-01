import { useParams } from "react-router-dom";
import { Book } from "../types/Books";
import { BookCategoriesSidebar } from "../../components/sidebar";
import { BookGrid } from "../../components/BookGrid";

export function BookCatalog({ books }: { books: Book[] }) {
  const { categoria } = useParams<{ categoria?: string }>();
  const filtered = categoria && categoria !== "Todos"
    ? books.filter(b => b.category?.toLowerCase() === categoria?.toLowerCase())
    : books;

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-3 mb-4">
          <BookCategoriesSidebar />
        </div>
        <div className="col-md-9">
          <BookGrid books={filtered} />
        </div>
      </div>
    </div>
  );
}