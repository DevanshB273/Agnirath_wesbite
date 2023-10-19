import React from 'react'
import Navbar from '../components common/Header'
import './Team.css'
import teamheader from '../images/teamphotointro.png'
import Footer from '../components common/footer';

function Team() {

  return (
    <div className='main'>
        <img src={teamheader} />
        <Navbar page='Team' />
        <p className='teamintro'>Team Agnirath, the solar car racing team of IIT Madras, is a passionate and diverse team of 40 undergraduate students dedicated to the exciting world of solar car racing. Our team brings together students from various engineering disciplines, pooling our knowledge and skills to design and build innovative solar-powered vehicles. We compete in global solar car challenges through intense collaboration and unwavering determination, showcasing sustainable transportation's potential.</p>
        <Footer />
    </div>
  )
}

export default Team