import { Book } from "../types/Books";
import { BookGrid } from "../../components/BookGrid";

export function BookList({ books }: { books: Book[] }) {
  return <BookGrid books={books} />;
}