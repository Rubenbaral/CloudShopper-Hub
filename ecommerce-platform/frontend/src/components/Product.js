// src/components/Product.js

import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="flex-1">{product.description}</p>
      <p className="text-lg">{product.price}</p>
      <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white p-2 mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
