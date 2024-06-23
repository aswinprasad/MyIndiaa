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
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavigationMenu />
        <div className="flex flex-grow">
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
