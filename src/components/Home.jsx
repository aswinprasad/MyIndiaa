import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyIndiaa</h1>
      <p className="text-lg mb-8">
        Empowering India with dropshipping business
      </p>
      <Link
        to="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default Home;
