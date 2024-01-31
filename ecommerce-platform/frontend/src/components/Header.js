// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Other header content */}
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/products" className="mr-4">Products</Link>
        {/* ... other navigation links ... */}
      </div>
      
      {/* Login and Register Buttons */}
      <div>
        <Link to="/cart" className="inline-flex items-center px-3 py-2 mr-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Cart
        </Link>
        <Link to="/login" className="inline-flex items-center px-3 py-2 mr-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Login
        </Link>
        <Link to="/register" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
