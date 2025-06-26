import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import { BookDetail } from './components/BookDetail';
import { BookList } from "./assets/pages/Booklist";
import { mockBooks } from "./components/NewReleases"; // importa tus libros mock
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ShippingBanner } from "./components/ShippingBanner"; // <-- Importa el ShippingBanner
import { CartProvider } from "./context/CartContext";
import { CartSidebar } from "./components/CartSidebar";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartProvider>
    <Router>
      <Navbar abrirCarrito={() => setCartOpen(true)} />
      <ShippingBanner />
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<BookList />} />
        <Route path="/libros/:id" element={<BookDetail books={mockBooks} />} />
        {/* ...otras rutas */}
      </Routes>
      <Footer /> {/* <-- El Footer estará SIEMPRE visible, en todas las páginas */}
    </Router>
    </CartProvider>
  );
}

export default App;