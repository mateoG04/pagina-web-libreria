import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export function Navbar({ abrirCarrito }: { abrirCarrito?: () => void }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ background: "#7c3aed", color: "#fff" }}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold" to="/" style={{ color: "#fff", fontSize: 28, letterSpacing: 2 }}>
            ZERO
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menú */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ color: "#fff" }}>
                  MANGA Y COMICS
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/manga">Manga</Link></li>
                  <li><Link className="dropdown-item" to="/comics">Comics</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ color: "#fff" }}>
                  LIBROS
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/libros">Todos los libros</Link></li>
                  <li><Link className="dropdown-item" to="/novedades">Novedades</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style={{ color: "#fff" }}>
                  MERCH
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/merch">Ver todo</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/figuras" style={{ color: "#fff" }}>FIGURAS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comida" style={{ color: "#fff" }}>COMIDA ASIÁTICA</Link>
              </li>
            </ul>
            {/* Iconos a la derecha */}
            <div className="d-flex align-items-center gap-3">
              <Link to="/buscar" style={{ color: "#fff", fontSize: 20 }}><FaSearch /></Link>
              <Link to="/usuario" style={{ color: "#fff", fontSize: 20 }}><FaUser /></Link>
              <span style={{ position: "relative" }}>
                <button
                  onClick={abrirCarrito}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: 20,
                    position: "relative",
                    padding: 0,
                  }}
                  aria-label="Ver carrito"
                >
                  <FaShoppingCart />
                  {totalItems > 0 && (
                    <span style={{
                      position: "absolute",
                      top: -6,
                      right: -10,
                      background: "#fff",
                      color: "#7c3aed",
                      borderRadius: "50%",
                      fontSize: 12,
                      width: 18,
                      height: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}>
                      {totalItems}
                    </span>
                  )}
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}