// src/components/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {/* Add to Cart Button */}
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
