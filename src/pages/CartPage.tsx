// src/pages/CartPage.tsx
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'

const CartPage: React.FC = () => {
  const { cart, removeFromCart, UpdateQuantity, total } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout-success');
  };

  if (cart.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>Your cart is empty</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.discountedPrice} x {item.quantity}</p>
          <button onClick={() => UpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => UpdateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;