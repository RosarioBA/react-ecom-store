export interface ProductImage {
    url: string;
    alt?: string;
}

export interface Review {
    id: string;
    username: string;
    rating: number;
    comment: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    images: ProductImage[]; //
    reviews: Review[];
}

export interface CartItem extends Product {
    quantity: number;
}