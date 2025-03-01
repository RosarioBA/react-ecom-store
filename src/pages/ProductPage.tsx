// src/pages/ProductPage.tsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';
import { CartContext } from '../contexts/CartContext';
import { Product } from '../types';

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

  const imageUrl = product.images && product.images.length > 0 
  ? product.images[0].url 
  : 'https://via.placeholder.com/500x400?text=No+Image';

  return (
    <div>
      <h1>{product.title}</h1>
      {product.images && product.images.length > 0 ? (
        <img 
          src={product.images[0].url} 
          alt={product.title} 
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            height: 'auto', 
            display: 'block', 
            margin: '0 auto' 
          }}
        />
      ) : (
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            height: '300px', 
            backgroundColor: '#f8f9fa', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          <span>No image available</span>
        </div>
      )}
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;