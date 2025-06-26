import { useEffect, useState } from 'react';
import { HeroSection } from '../../components/HeroSection';
import { NewReleases } from '../../components/NewReleases';
import { Book } from '../types/Books'; // Solo la interfaz
import { MerchCarousel } from "../../components/MerchCarousel";

function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('https://pagina-web-libreria.onrender.com')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* New Releases */}
      <NewReleases />

      {/* Merchandising */}
      <MerchCarousel />


      {/* Otras secciones */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestros Libros</h2>
          {/* Tu contenido existente */}
        </div>
      </section>
    </div>
  );
}

export default Home;