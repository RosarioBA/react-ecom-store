import { Product } from '../types';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://v2.api.noroff.dev/online-shop');
      const data = await response.json();
      console.log('First product data:', data.data[0]); // Look at the first product's structure
      return data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };
// src/api/index.ts - Update the fetchProductById function
export const fetchProductById = async (id: string): Promise<Product | null> => {
    try {
      // Remove "product/" from the URL
      const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
      const data = await response.json();
      console.log('Single product data:', data);
      return data.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  };