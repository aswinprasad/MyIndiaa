import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/reducers/cartReducer';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setIsLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 w-full bg-gray-900">
      {isLoading ? (
        <p
          className="text-center text-2xl font-semibold text-white mt-4"
          data-testid="loading"
        >
          Loading...
        </p>
      ) : (
        products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              quantity={quantity}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductList;
