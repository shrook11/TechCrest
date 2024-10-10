import { createContext, useContext } from "react";
import React from 'react';


// Create a context for the shopping cart
export const CartContext = createContext({
  cartItems: [],
  totalAmount: 0,
  addItemToCart: () => {},
  updateItemInCart: () => {},
  removeItemInCart: () => {},
  clearCart: () => {},
});

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
