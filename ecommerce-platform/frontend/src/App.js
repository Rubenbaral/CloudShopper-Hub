// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Update the quantity of the existing cart item
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add the new product to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (productId) => {
    // ... rest of your removeFromCart implementation
  };

  const updateQuantity = (productId, quantity) => {
    // ... rest of your updateQuantity implementation
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* This ensures that the footer can stick to the bottom */}
        <Header />
        <main className="flex-grow"> {/* This will grow to take up available space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList products={products} onAddToCart={addToCart} />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<Register />} />
            {/* Additional routes can be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
