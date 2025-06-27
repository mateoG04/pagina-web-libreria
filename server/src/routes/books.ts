import { Router } from 'express';
import Book from '../models/Books';
import mongoose from 'mongoose'; // <--- agrega esto si no está

const router = Router();

// GET /api/books - Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    // Logs para depuración
    console.log('Base de datos:', mongoose.connection.name);
    console.log('Colecciones:', await mongoose.connection.db.listCollections().toArray());

    const books = await Book.find();
    const mappedBooks = books.map(book => ({
      _id: book._id,
      title: book.title,
      author: book.author,
      price: book.price,
      imageFront: book.imageFront,
      imageBack: book.imageBack,
      isNew: book.isNew,
      description: book.description,
      pages: book.pages,
      format: book.format,
      isbn: book.isbn,
    }));
    res.json(mappedBooks);
  } catch (err) {
    console.error('Error real:', err);
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
});

// GET /api/books/:id - Obtener un libro por ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el libro' });
  }
});

export default router;