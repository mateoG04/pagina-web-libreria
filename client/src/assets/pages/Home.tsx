import { HeroSection } from '../../components/HeroSection';
import { NewReleases } from '../../components/NewReleases';
import { Book } from "../types/Books";
import { MerchCarousel } from "../../components/MerchCarousel";

function Home({ books }: { books: Book[] }) {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* New Releases */}
      <NewReleases books={books} /> {/* <-- PASA LOS LIBROS REALES */}

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