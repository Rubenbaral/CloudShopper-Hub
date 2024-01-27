// src/components/Product.js

import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="border p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="flex-1">{product.description}</p>
      <p className="text-lg">{product.price}</p>
      {/* Add to Cart Button */}
    </div>
  );
};

export default Product;
