// src/components/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = ({ onAddToCart }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  return (
    <div className="p-4">
      {product ? (
        <div>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <img src={product.image} alt={product.name} className="my-3" />
          <p>{product.description}</p>
          <p className="my-2">Price: {product.price}</p>
          <button 
            onClick={() => onAddToCart(product)} 
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
