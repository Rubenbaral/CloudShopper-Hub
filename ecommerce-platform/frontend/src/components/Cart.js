// src/components/Cart.js

import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="mb-4">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <div className="flex items-center gap-2 my-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-red-500 text-white p-1">-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-green-500 text-white p-1">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="bg-blue-500 text-white p-1">Remove from Cart</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
