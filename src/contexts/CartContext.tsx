import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    UpdateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    itemCount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    UpdateQuantity: () => {},
    clearCart: () => {},
    itemCount: 0,
    total: 0,
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [itemCount, setItemCount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

 // First useEffect - just for loading from localStorage once on mount
useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        setCart(JSON.parse(savedCart));
    }
}, []);

// Second useEffect - for saving to localStorage when cart changes
useEffect(() => {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        localStorage.removeItem('cart');
    }
    
    // Calculate derived values
    const newItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const newTotal = cart.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0);
    
    setItemCount(newItemCount);
    setTotal(newTotal);
}, [cart]);

    const addToCart = (product: Product): void => {
        const existingItemIndex = cart.findIndex((item) => item.id === product.id);

        if (existingItemIndex !== -1) {

            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: string): void => {
        setCart(cart.filter(item => item.id !== productId));

        if (cart.length === 1) {
            localStorage.removeItem('cart');
        }
    };

    const UpdateQuantity = (productId: string, quantity: number): void => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
    }

    const updatedCart = cart.map(item => 
        item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
};

const clearCart = (): void => {
    setCart([]);
    localStorage.removeItem('cart');
};

return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, UpdateQuantity, clearCart, itemCount, total }}>
        {children}
    </CartContext.Provider>
);
}