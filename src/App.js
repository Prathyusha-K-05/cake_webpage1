import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import CakeCategories from './components/CakeCategories';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import { CartProvider } from './components/CartContext';
function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CakeCategories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/CakeCategories" element={<CakeCategories />}/>
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;