import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  imageFront: String,
  imageBack: String,
  isNew: Boolean,
  description: String,
  pages: Number,
  format: String,
  isbn: String,
});

export default mongoose.model('Book', bookSchema);