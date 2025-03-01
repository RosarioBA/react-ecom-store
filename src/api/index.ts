import { Product } from '../types';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://v2.api.noroff.dev/online-shop');
      const data = await response.json();
      console.log('API response:', data); // Log the API response
      return data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

export const fetchProductById = async (id: string): Promise<Product | null> => {
    try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/product/${id}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching product by id', error);
        return null;
    }
};