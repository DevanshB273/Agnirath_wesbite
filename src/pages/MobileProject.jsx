import React from 'react'
import MobileNavbar from '../components common/MobileHeader'
import './project.css'
import imagebg from '../images/About iitm.png'
import Facts from '../components-project page/facts'
import MobileFooter from '../components common/Mobilefooter'
import Xray from '../images/partsbreak.png'
import UncontrolledExample from '../components-project page/videoslider'

function MobileProject() {

  return (
    <div className='mobilemain'>
        <div className='page'>
        <MobileNavbar/>
        <img src={imagebg} className='bornatiitm'/>
        <Facts />
        <img src={Xray} className='bornatiitm'/>
        <MobileFooter />
        </div>
    </div>
  )
}

export default MobileProject