import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const NavigationMenu = () => {
  const totalItems = useSelector((state) => state.cart.items)?.length;
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-blue-500 p-4 shadow-md">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/"
            className="text-white py-2 px-4 hover:bg-blue-700 rounded transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-white py-2 px-4 hover:bg-blue-700 rounded transition duration-300"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="text-white py-2 px-4 hover:bg-blue-700 rounded transition duration-300"
          >
            Cart
            {totalItems > 0 && (
              <span className="mx-2 text-white rounded-lg bg-blue-700 px-2 py-1  font-semibold">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
