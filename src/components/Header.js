import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Artisans Oven</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Cakes</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
