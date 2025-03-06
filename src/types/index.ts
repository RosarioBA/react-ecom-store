// src/types/index.ts
export interface ProductImage {
    url: string;
    alt: string;
  }
  
  export interface Review {
    id?: string;
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
    image: ProductImage;  // This is a single object, not an array
    rating?: number;
    tags?: string[];
    reviews?: Review[];
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }