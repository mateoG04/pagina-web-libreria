import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Book } from "../assets/types/Books";
import { RelatedBooks } from "./RelatedBooks";
import { useCart } from "../context/CartContext";
import { Footer } from "./Footer";

interface BookDetailProps {
    books: Book[];
}

export function BookDetail({ books }: BookDetailProps) {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [postalCode, setPostalCode] = useState("");
    const [shippingCost, setShippingCost] = useState<number | null>(null);

    // Carrusel: portada y contraportada
    const [currentImg, setCurrentImg] = useState(0);

    // Carrito
    const { addToCart } = useCart();

    useEffect(() => {
        // Busca por _id (MongoDB)
        const found = books.find((b) => b._id === id);
        setBook(found || null);
        setCurrentImg(0); // Siempre mostrar portada al cambiar de libro
    }, [id, books]);

    const handleShipping = () => {
        if (postalCode.length === 4 || postalCode.length === 5) {
            setShippingCost(1200 + Math.floor(Math.random() * 800));
        } else {
            setShippingCost(null);
            alert("Por favor, ingresa un código postal válido.");
        }
    };

    if (!book) return <div className="container py-5">Libro no encontrado.</div>;

    // Array de imágenes para el carrusel (portada y contraportada)
    const images = [
        `https://pagina-web-libreria.onrender.com/public/images/${book.imageFront}`,
        ...(book.imageBack ? [`https://pagina-web-libreria.onrender.com/public/images/${book.imageBack}`] : [])
    ];

    return (
        <>
            <div className="container py-5">
                <div className="row g-5">
                    {/* Carrusel de portada/contraportada */}
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: "16px",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                                padding: 24,
                                width: "100%",
                                maxWidth: 500,
                                marginBottom: 24,
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 12,
                            }}
                        >
                            <div
                                style={{
                                    width: 350,
                                    height: 500,
                                    maxWidth: "100%",
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                                    background: "#f8f8f8",
                                    margin: "0 auto",
                                    position: "relative"
                                }}
                            >
                                <img
                                    src={images[currentImg]}
                                    alt={
                                        currentImg === 1 && book.imageBack
                                            ? `Contraportada de ${book.title}`
                                            : book.title
                                    }
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                />
                                {/* Flecha izquierda */}
                                {images.length > 1 && currentImg > 0 && (
                                    <button
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: 0,
                                            transform: "translateY(-50%)",
                                            background: "#fff",
                                            border: "none",
                                            borderRadius: "50%",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                                            width: 36,
                                            height: 36,
                                            fontSize: 22,
                                            fontWeight: 700,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setCurrentImg((i) => i - 1)}
                                        aria-label="Anterior"
                                    >
                                        &#8592;
                                    </button>
                                )}
                                {/* Flecha derecha */}
                                {images.length > 1 && currentImg < images.length - 1 && (
                                    <button
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: 0,
                                            transform: "translateY(-50%)",
                                            background: "#fff",
                                            border: "none",
                                            borderRadius: "50%",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                                            width: 36,
                                            height: 36,
                                            fontSize: 22,
                                            fontWeight: 700,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setCurrentImg((i) => i + 1)}
                                        aria-label="Siguiente"
                                    >
                                        &#8594;
                                    </button>
                                )}
                            </div>
                            <div style={{ fontSize: 14, color: "#888" }}>
                                {currentImg === 1 && book.imageBack ? "Contraportada" : "Portada"}
                            </div>
                        </div>
                    </div>
                    {/* Detalles */}
                    <div className="col-md-6">
                        <nav style={{ fontSize: 14, color: "#888" }}>
                            Inicio / Libros / <span style={{ color: "#333" }}>{book.title}</span>
                        </nav>
                        <h2 className="mt-2 mb-1" style={{ fontWeight: 700 }}>{book.title}</h2>
                        <h5 className="text-muted mb-3">{book.author}</h5>
                        <div className="fs-2 fw-bold my-3" style={{ color: "#7c3aed" }}>
                            {typeof book.price === "number"
                                ? `$${book.price.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`
                                : "Precio no disponible"}
                        </div>
                        {/* Selector de cantidad */}
                        <div className="d-flex align-items-center mb-3">
                            <button
                                className="btn btn-outline-secondary"
                                style={{ borderRadius: "50%", width: 36, height: 36, fontWeight: 700 }}
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >-</button>
                            <span className="mx-3 fs-5">{quantity}</span>
                            <button
                                className="btn btn-outline-secondary"
                                style={{ borderRadius: "50%", width: 36, height: 36, fontWeight: 700 }}
                                onClick={() => setQuantity((q) => q + 1)}
                            >+</button>
                        </div>
                        {/* Botón de compra */}
                        <button
                            className="btn btn-primary btn-lg mb-3"
                            style={{
                                background: "linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)",
                                border: "none",
                                fontWeight: 600,
                                letterSpacing: 1,
                                boxShadow: "0 2px 8px rgba(124,58,237,0.10)",
                            }}
                            onClick={() =>
                                addToCart({
                                    id: book._id, // usa _id de MongoDB
                                    name: book.title,
                                    price: book.price,
                                    image: book.imageFront,
                                    quantity
                                })
                            }
                        >
                            Agregar al Carrito
                        </button>
                        {/* Calcular costo de envío */}
                        <div className="mb-4">
                            <label className="form-label fw-bold" htmlFor="postal">
                                Calcular costo de envío:
                            </label>
                            <div className="d-flex gap-2">
                                <input
                                    id="postal"
                                    type="text"
                                    className="form-control"
                                    placeholder="Tu código postal"
                                    value={postalCode}
                                    onChange={e => setPostalCode(e.target.value)}
                                    style={{ maxWidth: 160 }}
                                />
                                <button className="btn btn-outline-primary" onClick={handleShipping}>
                                    Calcular
                                </button>
                            </div>
                            {shippingCost !== null && (
                                <div className="mt-2 text-success">
                                    Costo de envío: <strong>${shippingCost}</strong>
                                </div>
                            )}
                        </div>
                        {/* Descripción */}
                        <div className="mt-4">
                            <h4 className="mb-3" style={{ color: "#7c3aed" }}>Más información</h4>
                            <p style={{ fontSize: 17 }}>{book.description}</p>
                            <ul className="list-unstyled mt-3" style={{ fontSize: 16 }}>
                                <li><strong>Número de páginas:</strong> {book.pages || "N/D"}</li>
                                <li><strong>Formato:</strong> {book.format || "Libro"}</li>
                                <li><strong>ISBN:</strong> {book.isbn || "N/D"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedBooks books={books} excludeId={book._id} />
        </>
    );
}