import React from 'react'
import Navbar from '../components common/Header'
import Footer from '../components common/footer'
import './Home.css'
import Aboutus from '../components-home page/about_us'
import IITM from '../components-home page/iitm'
import Compi from '../components-home page/competitions'

function Home() {

  return (
    <div className='main'>
        <Navbar page='Home'/>
        <div className='contenthome'>
          <Aboutus />
          <IITM />
          <Compi />
        </div>
        <Footer />
    </div>
  )
}

export default Home
