import React from 'react';
import header from '../images/competitions3dheader.png'
import './Mobilecompetitions.css'
import wsccard from '../images/wsc.png'
import sasolcard from '../images/sasol.png'
import asccard from '../images/asc.png'

const MobileCompi = () => {


  return (
    <div className='mobilecompetitions'>
        <img src={header} className='mobileheaderimg' /> 
        <div className='mobilechallenges'>
          <a href='https://www.worldsolarchallenge.org/'><img src={wsccard} className='mobilechallenegescard'/></a>
          <a href='https://www.solarchallenge.org.za/'><img src={sasolcard} className='mobilechallenegescard'/></a>
          <a href='https://www.americansolarchallenge.org/'><img src={asccard} className='mobilechallenegescard'/></a>
        </div>
    </div>
  );
};

export default MobileCompi;