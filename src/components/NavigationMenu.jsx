import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/products" className="mr-4">
        Products
      </Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default NavigationMenu;
