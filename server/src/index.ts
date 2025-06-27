import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

// Conexión a MongoDB Atlas se utiliza la URL de conexión proporcionada en mongoDB Atlas
mongoose.connect('mongodb+srv://titi04gerez:Redimidos777@cluster0.ds8ioay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Conectado a MongoDB Atlas'))
.catch(err => console.error('🔴 Error de conexión:', err));

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
});