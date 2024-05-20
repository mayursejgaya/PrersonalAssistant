import React from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';



const Navbar = () => {
  return (
    <div className="navbar_main">
      <div className='navbar'>
        <div className="nav_logo">
          <img className="logo" src={assets.searchlogo} alt='' />
          <h3>Assistant</h3>
        </div>
        <div className="nav_list">
          <a href='/'>Home</a>
          <a href='#app-downlaod'>App Download</a>

          <a href='#footer'>About us</a>

        </div>

        <div className="sign_button">
          <button><a href='/login'  >Login</a>  /  <a href='/reg' >Register</a></button>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
