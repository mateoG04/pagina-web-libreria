import { Router } from 'express';
import Book from '../models/books';

const router = Router();

// GET /api/books - Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
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