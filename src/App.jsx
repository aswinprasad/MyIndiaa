import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Routes from './components/Routes';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <NavigationMenu />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
