import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Implement logic to add items to cart
    console.log("Added to cart:", product);
    // Here you would typically update the cartItems state
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Switch>
            {/* ... other routes */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products">
              <ProductList onAddToCart={addToCart} />
            </Route>
            {/* ... */}
            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
            {/* Additional routes can be added here */}
          </Switch>
        </main>
        {/* ... */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
