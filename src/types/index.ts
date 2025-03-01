// src/types/index.ts
export interface ProductImage {
    url: string;
    alt?: string;
  }
  
  export interface Review {
    id: string;
    username: string;
    rating: number;
    description: string;
  }
  
  export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    // Use optional array for images
    image?: string;
    imageUrl?: string; 
    images?: ProductImage[];
    reviews?: Review[];
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }