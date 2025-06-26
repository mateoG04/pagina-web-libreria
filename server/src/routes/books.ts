import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

// Datos de ejemplo (luego lo cambiarás por una base de datos)
const books = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 19.99,
    image: 'it.jpg', // Nombre del archivo de imagen
    description: "Una obra maestra de la literatura latinoamericana."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 15.50,
    image: 'spiderman.jpg',
    description: "Clásico distópico sobre vigilancia y control."
  }
];

// GET /api/books - Obtener todos los libros
router.get('/', (req, res) => {
  res.json(books);
});

// Ruta para servir imágenes
router.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../../public/images', imageName);
  
  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).send('Imagen no encontrada');
  }
});

export default router;