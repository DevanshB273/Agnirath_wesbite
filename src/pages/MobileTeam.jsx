import React from 'react'
import MobileNavbar from '../components common/MobileHeader'
import './MobileTeam.css'
import teamheader from '../images/teamphotointro.jpg'
import MobileFooter from '../components common/Mobilefooter'

function MobileTeam() {

  return (
    <div className='main'>
        <img src={teamheader} />
        <MobileNavbar/>
        <p className='mobileteamintro'>Team Agnirath, the solar car racing team of IIT Madras, is a passionate and diverse team of 40 undergraduate students dedicated to the exciting world of solar car racing. Our team brings together students from various engineering disciplines, pooling our knowledge and skills to design and build innovative solar-powered vehicles. We compete in global solar car challenges through intense collaboration and unwavering determination, showcasing sustainable transportation's potential.</p>
        <MobileFooter />
    </div>
  )
}

export default MobileTeam