// src/pages/CartPage.tsx
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';

const CartContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    background-color: #0069d9;
  }
`;

const CartItemContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;

@media (max-width: 768px) {
    width: 100%;
    height: 200px;
    min-width: unset;
    margin-bottom: 1rem;
  }
`;

const ItemDetails = styled.div`
  flex: 1;

   @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const ItemTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #343a40;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const QuantityButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    background-color: #c82333;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const CartSummary = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #dee2e6;
  font-weight: bold;
  font-size: 1.2rem;
`;

const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #218838;
  }
`;

const CartPage: React.FC = () => {
  const { cart, removeFromCart, UpdateQuantity, total } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout-success');
  };

  if (cart.length === 0) {
    return (
      <CartContainer>
        <Title>Your Cart</Title>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
        </EmptyCart>
      </CartContainer>
    );
  }

  // Calculate subtotal and count items
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0);
  
  return (
    <CartContainer>
      <Title>Your Cart</Title>
      
      {cart.map(item => (
        <CartItemContainer key={item.id}>
          <ItemImage>
            {item.image && item.image.url ? (
              <img 
                src={item.image.url} 
                alt={item.image.alt || item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span>No image</span>
            )}
          </ItemImage>
          
          <ItemDetails>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>${item.discountedPrice.toFixed(2)} each</ItemPrice>
            
            <QuantityControls>
              <QuantityButton 
                onClick={() => UpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton onClick={() => UpdateQuantity(item.id, item.quantity + 1)}>
                +
              </QuantityButton>
            </QuantityControls>
          </ItemDetails>
          
          <div>
            <strong>${(item.discountedPrice * item.quantity).toFixed(2)}</strong>
          </div>
          
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Remove
          </RemoveButton>
        </CartItemContainer>
      ))}
      
      <CartSummary>
        <h2>Order Summary</h2>
        <SummaryRow>
          <span>Items ({itemCount}):</span>
          <span>${subtotal.toFixed(2)}</span>
        </SummaryRow>
        
        <TotalRow>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </TotalRow>
        
        <CheckoutButton onClick={handleCheckout}>
          Proceed to Checkout
        </CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
};

export default CartPage;