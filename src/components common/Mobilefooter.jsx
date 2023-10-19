import React from 'react';
import './Mobilefooter.css' ;
import ig from '../images/instagram.png'
import twitter from '../images/twitter.png'
import email from '../images/email.png'
import flicker from '../images/flicker.png'
import linkedin from '../images/linkedin.png'

const MobileFooter = () => {


  return (
    <div className='mobilefooter'>
        <div className='mobilesocials'>
            <div className='mobileindividualsocial'>
                <img src={ig} />
            </div>
            <div className='mobileindividualsocial'>
                 <img src={twitter} />
            </div>
            <div className='mobileindividualsocial'>
                <img src={email} />
            </div>
            <div className='mobileindividualsocial'>
                <img src={linkedin} />
            </div>
            <div className='mobileindividualsocial'>
                 <img src={flicker} />
            </div>
        </div>
        <div className='mobileorangebar' />
        <div>
            <p className='mobileaddress'> ADDRESS:<br />
                Sudha and Shankar Innovation Hub<br />
                IIT Madras<br />
                Chennai, Tamil Nadu - 600036EMAIL:<br />
                agnirath@smail.iitm.ac.in<br />
                <br />
                Contact:<br />
                Name<br />
                +91 73738 83838<br />
            </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6852129297868!2d80.22830117543081!3d12.991974514430547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b1fb87ef8d%3A0xa03b5a54521f8c14!2sSudha%20%26%20Shankar%20Innovation%20Hub!5e0!3m2!1sen!2sin!4v1697637152475!5m2!1sen!2sin" className='mobilemap' />
    </div>
  );
};

export default MobileFooter;
