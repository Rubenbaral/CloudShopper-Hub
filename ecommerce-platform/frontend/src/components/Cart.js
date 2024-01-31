// src/components/Cart.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  // Retrieve product price by id
  const getProductPrice = (itemId) => {
    const product = products.find(p => p.id === itemId);
    return product ? product.price : 0;
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      console.error('Price is undefined or null');
      return "0.00";
    }

    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    if (isNaN(numPrice)) {
      console.error('Price is not a valid number:', price);
      return "0.00";
    }

    return numPrice.toFixed(2);
  };

  const itemTotalPrice = (item) => {
    const price = getProductPrice(item.id);
    return price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + itemTotalPrice(item), 0);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (updateQuantity) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemoveFromCart = (id) => {
    if (removeFromCart) {
      removeFromCart(id);
    }
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>${formatPrice(getProductPrice(item.id))} each</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="bg-red-500 text-white p-1">-</button>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="bg-green-500 text-white p-1">+</button>
                </div>
              </div>
              <div>
                <p>Total: ${formatPrice(itemTotalPrice(item))}</p>
                <button onClick={() => handleRemoveFromCart(item.id)} className="bg-blue-500 text-white p-1">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold">Total Amount: ${formatPrice(calculateTotal())}</h3>
            <button onClick={navigateToCheckout} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;