// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/Submerged-Material-Changes.mp4';

const Home = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <video autoPlay loop muted style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '0',
      }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the opacity as necessary
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: '10',
        position: 'relative', // Ensure it sits above the video
        maxWidth: '600px', // Set a max-width if needed
      }}>
        <h1 className="text-5xl mb-6 font-bold text-blue-600" style={{ textShadow: '2px 2px 4px #000' }}>Welcome to Cloud Shopper Hub!</h1>
        <p className="text-xl mb-8" style={{ color: '#333', textShadow: '1px 1px 2px #FFF' }}>Discover a wide range of products tailored to your needs.<br/>Enjoy a seamless shopping experience with us.</p>
        <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
