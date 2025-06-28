import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import bookRoutes from './routes/Books';
import paymentRoutes from './routes/payments';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

// Usa la variable de entorno para la conexión a MongoDB Atlas
const mongoUri = process.env.MONGODB_URI as string;

mongoose.connect(mongoUri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Conectado a MongoDB Atlas'))
.catch(err => console.error('🔴 Error de conexión:', err));

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRoutes);

// Servir archivos estáticos (imágenes)
app.use('/public', express.static(path.join(__dirname, '../public')));

// Usa la ruta de libros
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});