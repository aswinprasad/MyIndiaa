import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItemFromCart } from '../redux/reducers/cartReducer';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 bg-gray-900 w-full">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          <p className="text-white" data-testid="empty-cart-message">
            Your cart is empty.
          </p>
          <Link to="/products">
            <button className="btn-base btn-add mt-5">Browse Products</button>
          </Link>
        </div>
      ) : (
        <>
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {cartItems.map((item) => (
              <li key={item.id} className="px-3 py-4 sm:pt-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.quantity} x ${item.price}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${item.quantity * item.price}
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <TrashIcon className="size-6 " />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearCart}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
