// src/App.js

import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  // Example products data
  const products = [
    // ... your products data here
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
