// src/pages/CheckoutSuccessPage.tsx
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';

const SuccessContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background-color: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const Title = styled.h1`
  color: #28a745;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #495057;
`;

const ContinueButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    background-color: #0069d9;
  }
`;

const CheckoutSuccessPage: React.FC = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    // Clear the cart when this page loads
    clearCart();
  }, [clearCart]);

  return (
    <SuccessContainer>
      <SuccessIcon>✓</SuccessIcon>
      <Title>Order Successful!</Title>
      <Message>
        Thank you for your purchase. Your order has been received and is being processed.
        You will receive a confirmation email shortly with the details of your order.
      </Message>
      <ContinueButton to="/">Continue Shopping</ContinueButton>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;