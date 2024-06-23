import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import ProductList from './ProductList';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Switch>
  );
};

export default Routes;
