import React, { useState } from 'react';
import Logo from '../images/Navbarlogo.png';
import './MobileHeader.css'
import Hamburger from './OffCanvasMenu';

function MobileNavbar() {
  return (
    <div className='mobileheadermain'>
      <img src={Logo} className='logomobile'/>
      <Hamburger />
    </div>
  );
}

export default MobileNavbar;