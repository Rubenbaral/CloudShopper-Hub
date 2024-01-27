// src/components/ProductList.js

import React from 'react';
import Product from './Product';
import products from '../data/products'; // Import mock data

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
      ))}
    </div>
  );
};

export default ProductList;
