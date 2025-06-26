import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/fondo.jpg')`,
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