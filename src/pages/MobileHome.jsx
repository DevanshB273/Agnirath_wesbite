import React from 'react';
import MobileNavbar from '../components common/MobileHeader';
import MobileFooter from '../components common/Mobilefooter';
import MobileAboutus from '../components-home page/Mobileabout_us';
import MobileIITM from '../components-home page/Mobileiitm';
import MobileCompi from '../components-home page/Mobilecompetitions';
import './MobileHome.css';

function MobileHome() {
  return (
    <div className='MobileMain'>
      <MobileNavbar/>
      <div className='contenthome'>
        <MobileAboutus />
        <MobileIITM />
        <MobileCompi />
      </div>
      <MobileFooter />
    </div>
  );
}

export default MobileHome;
