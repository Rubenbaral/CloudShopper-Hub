// src/components/Cart.js

import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage or API
  }, []);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {items.length > 0 ? (
        items.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            {/* Remove from cart button */}
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
