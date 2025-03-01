// src/components/ProductCard.tsx (updated)
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      {product.images && product.images.length > 0 ? (
        <img 
          src={product.images[0].url} 
          alt={product.title} 
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      ) : (
        <ProductImage>
          <span>No image available</span>
        </ProductImage>
      )}
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.discountedPrice}</ProductPrice>
        <ViewButton to={`/product/${product.id}`}>View Product</ViewButton>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;