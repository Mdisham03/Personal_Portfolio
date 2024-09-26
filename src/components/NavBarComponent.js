import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import icon from './images/logo.png';
import { FaWhatsapp } from 'react-icons/fa';

const NavBarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);

  const handleClose = () => setExpanded(false);

  React.useEffect(() => {
    handleClose();
  }, [location]);

  return (
    <div className="container-fluid sticky-top px-0">
      <Navbar expand="lg" bg="light" variant="light" className="py-3 px-4" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="p-0">
            <img src={icon} alt="Constra Logo" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto pt-2 pt-lg-0">
              <Nav.Link as={Link} to="/" className="nav-item" onClick={handleClose}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item" onClick={handleClose}>
                About Us
              </Nav.Link>
              
              <Nav.Link as={Link} to="/contact" className="nav-item" onClick={handleClose}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="whatsapp-button-container">
        <a className="whatsapp-button" href='https://wa.me/919600770061'>
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default NavBarComponent;
