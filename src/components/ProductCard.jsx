import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-lg">{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
