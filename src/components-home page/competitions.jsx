import React from 'react';
import header from '../images/competitions3dheader.png'
import './competitions.css'
import wsccard from '../images/wsc.png'
import sasolcard from '../images/sasol.png'
import asccard from '../images/asc.png'

const Compi = () => {


  return (
    <div className='competitions'>
        <img src={header} className='headerimg' /> 
        <div className='challenges'>
          <a href='https://www.worldsolarchallenge.org/'><img src={wsccard} className='challenegescard'/></a>
          <a href='https://www.solarchallenge.org.za/'><img src={sasolcard} className='challenegescard'/></a>
          <a href='https://www.americansolarchallenge.org/'><img src={asccard} className='challenegescard'/></a>
        </div>
    </div>
  );
};

export default Compi;