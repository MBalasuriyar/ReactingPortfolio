import React from "react";
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './images/logo.png'

function Nav() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu =() => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='nav'>
      <Link to='/' className='nav-links' onClick={closeMobileMenu}><img src={logo} alt="" className="logo"></img></Link>
        <div className='nav-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}> <i class="fas fa-home"></i> Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Work' className='nav-links' onClick={closeMobileMenu}><i class="fab fa-node-js"></i> Work</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}> <i class="far fa-address-card"></i> Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={closeMobileMenu}><i class="fas fa-user"></i> About</Link>
            </li>
          </ul>
       
        </div>
      </nav>
    </>
  )
}

  export default Nav;