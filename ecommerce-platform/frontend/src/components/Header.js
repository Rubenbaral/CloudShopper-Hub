// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-lg">Cloud Shopper Hub</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          {/* Add other navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
