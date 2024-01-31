// src/components/Checkout.js

import React, { useState } from 'react';

const Checkout = ({ onCheckout }) => {
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    address: '',
    creditCard: '',
    expiryDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onCheckout === 'function') {
      onCheckout(checkoutForm);
    } else {
      console.log('Checkout form submitted:', checkoutForm);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={checkoutForm.name}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <input
            id="address"
            name="address"
            type="text"
            value={checkoutForm.address}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="creditCard" className="block text-gray-700 text-sm font-bold mb-2">Credit Card Number:</label>
          <input
            id="creditCard"
            name="creditCard"
            type="text"
            value={checkoutForm.creditCard}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date:</label>
          <input
            id="expiryDate"
            name="expiryDate"
            type="text"
            value={checkoutForm.expiryDate}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
