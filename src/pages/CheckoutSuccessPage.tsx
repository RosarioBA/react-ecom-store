// src/pages/CheckoutSuccessPage.tsx
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CheckoutSuccessPage: React.FC = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase. Your order has been processed successfully.</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default CheckoutSuccessPage;