import React from 'react'
import Navbar from '../components common/Header'
import './project.css'
import UncontrolledExample from '../components-project page/videoslider'
import imagebg from '../images/About iitm.png'
import Facts from '../components-project page/facts'
import Footer from '../components common/footer'
import Xray from '../images/partsbreak.png'

function Project() {

  return (
    <div className='main'>
        <div className='page'>
        <Navbar page='Project' />
        <img src={imagebg} className='bornatiitm'/>
        <Facts />
        <img src={Xray} className='bornatiitm'/>
        <Footer />
        </div>
    </div>
  )
}

export default Project