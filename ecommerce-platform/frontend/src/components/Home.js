// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/Submerged-Material-Changes.mp4'; // Updated import statement

const Home = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <video
  autoPlay
  loop
  muted
  style={{
    position: 'absolute',
    width: '100%',
    left: '50%',
    top: '50%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: '0', // Ensuring that this is behind all other content; sometimes zIndex needs to be lower.
  }}
>
  <source src={backgroundVideo} type="video/mp4" />
</video>


      <div className="bg-white p-10 rounded-lg shadow-md text-center z-10">
        <h1 className="text-5xl mb-6 font-bold text-blue-600">Welcome to Cloud Shopper Hub!</h1>
        <p className="text-xl mb-8">Discover a wide range of products tailored to your needs.<br/>Enjoy a seamless shopping experience with us.</p>
        <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
