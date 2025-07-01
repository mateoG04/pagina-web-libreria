import { Link, useLocation } from "react-router-dom";

const categories = [
  "Todos",
  "Nacional",
  "Americano",
  "Europeo",
  "DC Comics",
  "Marvel",
  "Novela Gráfica"
  // Agrega más si quieres
];

export function BookCategoriesSidebar() {
  const location = useLocation();
  const current = decodeURIComponent(location.pathname.split("/").pop() || "");

  return (
    <aside>
      <h5 className="mb-3">CATEGORÍAS</h5>
      <ul className="list-unstyled">
        {categories.map(cat => (
          <li key={cat}>
            <Link
              to={cat === "Todos" ? "/libros" : `/libros/categoria/${encodeURIComponent(cat)}`}
              className={`d-block py-2 px-2 ${current === cat ? "fw-bold text-primary" : ""}`}
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}