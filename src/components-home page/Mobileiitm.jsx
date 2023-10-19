import React from 'react';
import './Mobileiitm.css' ;
import IITMlogo from '../images/IITM logo - home page.png'

const MobileIITM = () => {


  return (
    <div className='mobileiitm'>
      <img src={IITMlogo} className='mobileimage'></img>
      <p className='Mobileparagraph'>
      IIT Madras, founded in 1959 and located in Chennai, Asia's automotive capital, is one of the premier institutions on the Indian subcontinent. It has been ranked #1 for eight consecutive years (2016 - 2023) as the best Engineering Institution in the country under NIRF by MHRD, Government of India. With the support of its esteemed alums of over 60 years, the institute houses - one of its kind - Centre For Innovation, the largest student-run innovation lab in India. It serves as a workspace for the students who choose to bring out some innovation with their ideas.  It is also home to other student teams, representing IIT Madras and India at several global competitions.
      </p>
    </div>
  );
};

export default MobileIITM;

