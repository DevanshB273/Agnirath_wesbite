import React from 'react';
import Navbar from '../components common/Header';
import Footer from '../components common/footer';
import Aboutus from '../components-home page/about_us';
import IITM from '../components-home page/iitm';
import Compi from '../components-home page/competitions';
import './Home.css';

function Home() {
  return (
    <div className='main'>
      <Navbar page='Home' />
      <div className='contenthome'>
        <Aboutus />
        <IITM />
        <Compi />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
