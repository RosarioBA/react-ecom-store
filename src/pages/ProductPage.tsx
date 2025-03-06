// src/pages/ProductPage.tsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchProductById } from '../api';
import { CartContext } from '../contexts/CartContext';
import { Product, Review } from '../types';

const ProductContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductTitle = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;

const ProductDescription = styled.p`
  line-height: 1.6;
  color: #343a40;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const DiscountedPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #6c757d;
`;

const DiscountBadge = styled.span`
  background-color: #dc3545;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  max-width: 200px;
  
  &:hover {
    background-color: #218838;
  }
`;

const ReviewsSection = styled.div`
  margin-top: 3rem;
`;

const ReviewCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Rating = styled.div`
  color: #ffc107;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await fetchProductById(id);
        console.log('Product data:', data); // Log to check the response
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;
  
  // Calculate discount percentage if there is one
  const hasDiscount = product.price > product.discountedPrice;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : 0;

  // Generate stars for rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>{index < rating ? '★' : '☆'}</span>
    ));
  };

  return (
    <ProductContainer>
      <BackButton to="/">← Back to Products</BackButton>
      <ProductLayout>
        <ImageContainer>
          {product.image && product.image.url ? (
            <img 
              src={product.image.url} 
              alt={product.image.alt || product.title}
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }}
            />
          ) : (
            <span>No image available</span>
          )}
        </ImageContainer>
        <ProductDetails>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          
          <PriceContainer>
            <DiscountedPrice>${product.discountedPrice}</DiscountedPrice>
            {hasDiscount && (
              <>
                <OriginalPrice>${product.price}</OriginalPrice>
                <DiscountBadge>{discountPercentage}% OFF</DiscountBadge>
              </>
            )}
          </PriceContainer>
          
          <AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </AddToCartButton>
        </ProductDetails>
      </ProductLayout>
      
      {product.reviews && product.reviews.length > 0 && (
        <ReviewsSection>
          <h2>Customer Reviews</h2>
          {product.reviews.map((review: Review, index: number) => (
            <ReviewCard key={review.id || index}>
              <ReviewHeader>
                <Username>{review.username}</Username>
                <Rating>{renderStars(review.rating)}</Rating>
              </ReviewHeader>
              <p>{review.description}</p>
            </ReviewCard>
          ))}
        </ReviewsSection>
      )}
    </ProductContainer>
  );
};

export default ProductPage; 