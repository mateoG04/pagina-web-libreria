import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import { BookDetail } from './components/BookDetail';
import { BookList } from "./assets/pages/Booklist";
import { Book } from "./assets/types/Books";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ShippingBanner } from "./components/ShippingBanner"; // <-- Importa el ShippingBanner
import { CartProvider } from "./context/CartContext";
import { CartSidebar } from "./components/CartSidebar";
import { MerchDetail } from "./components/MerchDetail"; // crea este componente
import { BookCatalog } from "./assets/pages/bookCatalog"; // si lo mueves a assets/pages
import { Manga } from "./assets/pages/Manga";
import { Loader } from "./components/Loader";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pagina-web-libreria.onrender.com/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <CartProvider>
      <Router>
        <Navbar abrirCarrito={() => setCartOpen(true)} />
        <ShippingBanner />
        <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/libros" element={<BookList books={books} />} />
          <Route path="/libros/:id" element={<BookDetail books={books} />} />
          <Route path="/merch/:id" element={<MerchDetail />} />
          <Route path="/libros" element={<BookCatalog books={books} />} />
          <Route path="/libros/categoria/:categoria" element={<BookCatalog books={books} />} />
          <Route path="/libros/europeos" element={<Manga books={books} />} />
          {/* ...otras rutas */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;