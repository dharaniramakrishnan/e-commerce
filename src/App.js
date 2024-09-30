// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Cart from './Cart';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/list" element={<List handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
