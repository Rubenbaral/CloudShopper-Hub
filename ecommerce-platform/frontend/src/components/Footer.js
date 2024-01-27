// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Cloud Shopper Hub</p>
    </footer>
  );
};

export default Footer;
