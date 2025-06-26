import { useCart } from "../context/CartContext";

export function CartSidebar({ open, onClose }: { open: boolean, onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: 380,
      height: "100vh",
      background: "#fff",
      boxShadow: "-2px 0 16px rgba(0,0,0,0.10)",
      zIndex: 2000,
      padding: 24,
      overflowY: "auto"
    }}>
      <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, fontSize: 22, background: "none", border: "none" }}>×</button>
      <h4 className="mb-4">Mi carrito</h4>
      {cart.length === 0 ? (
        <div>Tu carrito está vacío.</div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="d-flex align-items-center mb-3">
              <img src={item.image} alt={item.name} style={{ width: 60, height: 80, objectFit: "cover", borderRadius: 8, marginRight: 12 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div className="text-muted">${item.price.toLocaleString("es-AR")}</div>
                <div className="d-flex align-items-center mt-1">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="btn btn-sm btn-outline-secondary">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-sm btn-outline-secondary">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-link text-danger ms-2">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          <div className="fw-bold fs-5 mt-4">Total: ${subtotal.toLocaleString("es-AR")}</div>
          <button className="btn btn-primary w-100 mt-3">Realizar compra</button>
          <button className="btn btn-outline-secondary w-100 mt-2" onClick={onClose}>Ver más productos</button>
        </>
      )}
    </div>
  );
}