import React from 'react'
import MobileNavbar from '../components common/MobileHeader'
import './MobileSponsors.css'
import logoReliance from '../images/logo-reliance.png'
import logoBridgestone from '../images/logo-bridgestone.png'
import logoAther from '../images/logo-ather.png'
import logoNal from '../images/logo-nal.png'
import logoLoctite from '../images/logo-loctite.png'
import logoLectromech from '../images/logo-lectromech.png'
import logoValeo from '../images/logo-valeo.png'
import logoBrakesindia from '../images/logo-brakesindia.png'
import logoAnsys from '../images/logo-ansys.png'
import logoSolidworks from '../images/logo-solidworks.png'
import MobileFooter from '../components common/Mobilefooter'
import intialbg from '../images/sponsorangegrad.png'

function MobileSponsors() {

  return (
    <div className='mobilemain'>
      <div className='mobilesponshead' style={{ backgroundImage: `url(${intialbg})`, backgroundSize: 'cover'}}>
        <h1>Sponsors</h1>
        <div className='mobileorangebartop' />
        <p> We would like to thank, our sponsor for making it possible to participate in the World Solar Challenge.</p>
      </div>
      <MobileNavbar/>
      <div className='mobilesponssection'>
        <div className='mobilespons' style={{ backgroundColor: '#E6E6E6'}}>
            <img src={logoReliance} alt="Reliance Logo" />
            <p style={{ color: '#000' }}>Reliance New Energy is committed to renewable energy and sustainable practices, helping India lead in the Green New Energy future and bridging the Green Energy divide in India and the world. Reliance New Energy is the sole sponsor of team Agnirath, and they have been under our wings throughout this fantastic journey to date</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#666666'}}>
            <img src={logoBridgestone} alt="Bridgestone Logo" />
            <p style={{ color: '#FFF' }}>A highly prestigious brand, Bridgestone, is known for its premium, durable tires designed with innovative technologies to keep you moving. Bridgestone tires are the go-to choice for OEM BMW, Mercedes, Audi tires, and leading car manufacturers.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#1D952F'}}>
            <img src={logoAther} alt="Ather Logo" />
            <p style={{ color: '#000' }}>An IIT Madras startup, Ather Energy, is one of India's leading electric vehicle manufacturers. They produce world-class, efficient electric vehicles that push the boundaries of innovation and are at the forefront of pioneering E-mobility technology in India.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#1A1A1A'}}>
          <img src={logoNal} alt="NAL Logo" />
            <p style={{ color: '#FFF' }}>The National Aerospace Laboratories (NAL) is India's first and largest aerospace research company, established by the Council of Scientific and Industrial Research (CSIR) in Delhi in 1959. They concentrate on research on advanced topics in aerospace and related disciplines.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#E6E6E6'}}>
          <img src={logoLoctite} alt="Loctite Logo" />
            <p style={{ color: '#000' }}>LOCTITE is the world’s leading adhesives, sealants, and surface treatments brand. With breakthrough technology, we provide solutions that deliver on our goals, providing more efficient adhesives that are durable, strong, and long-lasting to unlock the limitless potential of man and machine.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#666666'}}>
            <img src={logoLectromech} alt="LMI Logo" />
            <p style={{ color: '#FFFFFF' }}>Reliance New Energy, with its commitment to renewable energy and sustainable practices, has been the wind beneath our wings throughout this amazing journey till date.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#1A1A1A'}}>
          <img src={logoValeo} alt="Valeo Logo" />
            <p style={{ color: '#FFF' }}>Valeo is an automotive supplier and partner to automakers worldwide. As a tech company, we design innovative solutions for smart mobility.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#C88F07'}}>
          <img src={logoBrakesindia} alt="Brakes India Logo" />
            <p style={{ color: '#FFF' }}>Established in 1962, Brakes India Limited is the leading manufacturer of automotive and non-automotive braking systems and ferrous castings in India.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#E6E6E6'}}>
          <img src={logoAnsys} alt="Ansys Logo" />
            <p style={{ color: '#000' }}>With more than 50 years of experience, Ansys is the world reference in computer simulation. Its tools are used by market leaders to transform the way they design, allowing engineers to explore and predict how products will perform in the real world.</p>
        </div>
        <div className='mobilespons' style={{ backgroundColor: '#1A1A1A'}}>
          <img src={logoSolidworks} alt="SolidWorks Logo" />
            <p style={{ color: '#FFF' }}>SOLIDWORKS® provides powerful yet easy-to-use 2D and 3D product development solutions accessible to any business. SOLIDWORKS solutions are trusted by leading engineers and designers to create, collaborate, and deliver innovative product experiences.</p>
        </div>
      </div>
      <MobileFooter />
    </div>
  )
}

export default MobileSponsors
