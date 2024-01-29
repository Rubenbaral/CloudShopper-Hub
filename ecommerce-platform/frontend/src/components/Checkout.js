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
    onCheckout(checkoutForm);
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={checkoutForm.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            type="text"
            value={checkoutForm.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card Number:</label>
          <input
            id="creditCard"
            name="creditCard"
            type="text"
            value={checkoutForm.creditCard}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            id="expiryDate"
            name="expiryDate"
            type="text"
            value={checkoutForm.expiryDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
