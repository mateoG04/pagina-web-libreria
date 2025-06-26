import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (imágenes)
app.use('/public', express.static(path.join(__dirname, '../public')));

// Importar y usar rutas
import bookRoutes from './routes/books';
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);

  app.use(cors({
  origin: 'http://localhost:5173', // URL de tu frontend
  credentials: true
}));
});