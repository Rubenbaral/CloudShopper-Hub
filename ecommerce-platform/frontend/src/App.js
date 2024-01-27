import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/products/:productId">
              <ProductDetails />
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
