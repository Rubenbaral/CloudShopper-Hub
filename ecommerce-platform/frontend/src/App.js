// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import products from './data/products'; // Mock product data

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" exact>
              {/* Home page content or component */}
            </Route>
            <Route path="/products">
              <ProductList products={products} onAddToCart={addToCart} />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            {/* Additional routes can be added here */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
