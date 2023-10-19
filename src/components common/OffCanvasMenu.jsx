import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './CustomOffcanvas.css'
import Menu from '../images/hamburgerMenu1.png'

function Hamburger() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="offcanvas-trigger" onClick={handleShow}>
        <img src={Menu} alt="Open Offcanvas" className='hamburger'/>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <button className='close' onClick={handleClose}>X</button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/sponsors">Sponsors</a></li>            
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Hamburger;
