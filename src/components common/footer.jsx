import React from 'react';
import './footer.css' ;
import ig from '../images/instagram.png'
import twitter from '../images/twitter.png'
import email from '../images/email.png'
import flicker from '../images/flicker.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {


  return (
    <div className='footer'>
        <div className='socials'>
            <div className='individualsocial'>
                <a href='https://www.instagram.com/Agnirath.IITM'><img src={ig} /><p>@agnirath</p></a>
            </div>
            <div className='individualsocial'>
                 <a href='https://www.twitter.com/TeamAgniRath'><img src={twitter} /><p>Twitter</p></a>
            </div>
            <div className='individualsocial'>
                <a href='agnirath@smail.iitm.ac.in'><img src={email} /><p>Email</p></a>
            </div>
            <div className='individualsocial'>
                <a href='https://www.linkedin.com/company/team-4gnirath/mycompany/'><img src={linkedin} /><p>Linkedin</p></a>
            </div>
            <div className='individualsocial'>
                 <a href='https://www.flickr.com/photos/196730232@N07'><img src={flicker} /><p>Flicker</p></a>
            </div>
        </div>
        <div className='orangebar' />
        <div>
            <p className='address'> ADDRESS:<br />
                Sudha and Shankar Innovation Hub<br />
                IIT Madras<br />
                Chennai, Tamil Nadu - 600036EMAIL:<br />
                agnirath@smail.iitm.ac.in<br />
                <br /><br />
                Contact:<br />
                Damyanti Jain<br />
                +91 93241 12961<br />
            </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6852129297868!2d80.22830117543081!3d12.991974514430547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b1fb87ef8d%3A0xa03b5a54521f8c14!2sSudha%20%26%20Shankar%20Innovation%20Hub!5e0!3m2!1sen!2sin!4v1697637152475!5m2!1sen!2sin" className='map' />
    </div>
  );
};

export default Footer;
