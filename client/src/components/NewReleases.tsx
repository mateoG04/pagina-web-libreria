// components/NewReleases.tsx
import { Link } from 'react-router-dom';
import { Book } from '../assets/types/Books';
import { BookCard } from '../components/BookCard';

// Libros de prueba (mock)
export const mockBooks: Book[] = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 19.99,
    image: "https://www.sddistribuciones.com/Portadas/MEXSPIDE190.JPG", // Ruta relativa a la imagen
    backCover:"https://i1.whakoom.com/large/18/36/5366994b1ec04efeb7ba87eddb39bae1.jpg",
    description: "Una obra maestra de la literatura latinoamericana."
  },
  {
    id: 2,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c5/13/09/c51309a573d1e5818fabe92065260b4d.jpg",
    backCover:"",
    description: "Un clásico para grandes y chicos."
  },
  {
    id: 3,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c5/13/09/c51309a573d1e5818fabe92065260b4d.jpg",
    backCover:"",
    description: "Un clásico para grandes y chicos."
  },
  {
    id: 4,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c5/13/09/c51309a573d1e5818fabe92065260b4d.jpg",
    backCover:"",
    description: "Un clásico para grandes y chicos."
  },
  {
    id: 5,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c5/13/09/c51309a573d1e5818fabe92065260b4d.jpg",
    backCover:"",
    description: "Un clásico para grandes y chicos."
  },
  // ...agrega más libros si quieres
];

interface NewReleasesProps {
  books?: Book[];
}

export const NewReleases = ({ books = mockBooks }: NewReleasesProps) => {
  const newReleases = books.slice(0, 5); // aca se coloca el limete de libros que se van a mostrar en la pagina

  return (
    <section className="new-releases py-5 bg-light">
      <div className="container">
        <div className="section-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Últimas Novedades</h2>
          <Link to="/novedades" className="btn btn-outline-primary">
            Ver Todas
          </Link>
        </div>
        <div className="row">
          {newReleases.map(book => (
            <div key={book.id} className="col-lg-3 col-md-6 mb-4">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};