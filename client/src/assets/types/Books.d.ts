export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string; // carátula
  backCover?: string; // contraportada (opcional)
  description: string;
  pages?: number; // número de páginas (opcional)
  format?: string; // formato (opcional, por ejemplo: "Tapa blanda", "Tapa dura", "Ebook")
  isbn?: string; // ISBN (opcional)
}