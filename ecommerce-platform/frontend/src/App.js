import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
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
              <ProductList />
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
