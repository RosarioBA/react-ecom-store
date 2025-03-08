// src/components/ProductRecommendations.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { fetchProducts } from '../api';

interface ProductRecommendationsProps {
  currentProductId: string;
  limit?: number;
}

const RecommendationsContainer = styled.div`
  margin-top: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
   @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
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
  height: 150px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ 
  currentProductId, 
  limit = 3 
}) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        setLoading(true);
        const products = await fetchProducts();
        
        // Filter out the current product and limit to specified number
        const filteredProducts = products
          .filter(product => product.id !== currentProductId)
          .slice(0, limit);
          
        setRecommendations(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setLoading(false);
      }
    };

    getRecommendations();
  }, [currentProductId, limit]);

  if (loading) return <div>Loading recommendations...</div>;
  if (recommendations.length === 0) return null;

  return (
    <RecommendationsContainer>
      <Title>You May Also Like</Title>
      <ProductsGrid>
        {recommendations.map(product => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductImage>
                {product.image && product.image.url ? (
                  <img 
                    src={product.image.url} 
                    alt={product.image.alt || product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <span>No image</span>
                )}
              </ProductImage>
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>${product.discountedPrice}</ProductPrice>
              </ProductInfo>
            </Link>
          </ProductCard>
        ))}
      </ProductsGrid>
    </RecommendationsContainer>
  );
};

export default ProductRecommendations;