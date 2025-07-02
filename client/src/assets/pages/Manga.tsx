// filepath: c:\Users\Usuario\Desktop\libreria\client\src\assets\pages\Manga.tsx
import { Book } from "../types/Books";
import { BookGrid } from "../../components/BookGrid";

export function Manga({ books }: { books: Book[] }) {
  const mangas = books.filter(b => b.category?.toLowerCase() === "manga");
  return (
    <div className="container py-4">
      <h2 className="mb-4">Manga y Comics</h2>
      <BookGrid books={mangas} />
    </div>
  );
}