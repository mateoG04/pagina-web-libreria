export interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  imageFront: string;
  imageBack?: string;
  isNew?: boolean;
  description?: string;
  pages?: number;
  format?: string;
  isbn?: string;
  category?: string; // <-- agrega esta línea
  descount?: number; // <-- agrega esta línea
}