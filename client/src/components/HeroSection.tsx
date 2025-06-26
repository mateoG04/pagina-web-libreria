// components/HeroSection.tsx
import { Link } from 'react-router-dom';
import libreriaImg from '../assets/images/libreria.jpg'; // Asegúrate de que la ruta sea correcta

export const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/public/fondo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Bienvenido a Nuestra Librería</h1>
        <p className="hero-subtitle">Descubre mundos en cada página</p>
        <div className="hero-buttons">
          <Link to="/libros" className="btn btn-primary">
            Explorar Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};