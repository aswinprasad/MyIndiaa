import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, quantity }) => {
  //   return (
  //     <div className="border w-72 p-4 m-2 shadow-lg rounded-lg flex flex-col items-center bg-white transition-all hover:shadow-xl">
  //       <img
  //         src={product.image}
  //         alt={product.name}
  //         className="w-64 h-64 object-contain rounded-lg"
  //       />
  //       <h3 className="text-sm font-medium mt-1 text-gray-600">
  //         {product.category}
  //       </h3>
  //       <h2 className="text-lg font-bold mt-1 text-gray-800">{product.title}</h2>
  //       <h2 className="text-md font-bold mt-2 text-gray-800">{product.name}</h2>
  //       <p className="text-md text-gray-500">${product.price}</p>
  //       <button
  //         onClick={() => addToCart(product)}
  //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded-full transition-colors shadow"
  //       >
  //         Add to Cart
  //       </button>
  //     </div>
  //   );
  return (
    <div class="flex flex-col justify-between w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        class="w-64 h-64 p-8 rounded-t-lg"
        src={product.image}
        alt={product.name}
      />
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {product.title}
        </h5>
        <h7 class="text-md text-gray-500 dark:text-gray-400 line-clamp-1">
          {product.category}
        </h7>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating.rate}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>

          {quantity > 0 ? (
            <div class="flex items-center space-x-2 text-sm font-semibold text-gray-900 dark:text-white">
              <a
                className="btn-base btn-remove"
                onClick={() => removeFromCart(product.id)}
                aria-label="Remove from cart"
              >
                -
              </a>
              <span className="text-gray-500 dark:text-gray-400">
                {quantity}
              </span>
              <a
                className="btn-base btn-add"
                onClick={() => addToCart(product)}
                aria-label="Add one more to cart"
              >
                +
              </a>
            </div>
          ) : (
            <a
              className="btn-base btn-add"
              onClick={() => addToCart(product)}
              aria-label="Add to cart"
            >
              Add to cart
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
