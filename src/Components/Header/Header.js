import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div>
        <h2 className='brand'>Book Shop</h2>
      </div>
      <div className='navbar-links'>
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About Us</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;