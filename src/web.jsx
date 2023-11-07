import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
const Web = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarColor = scrollPosition > 80 ? '#052c65' : 'transparent'; // Change 'yourDesiredColor' to the desired background color
      setNavbarBackground(navbarColor);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/Login');
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar fixed-top container-fluid" style={{ backgroundColor: navbarBackground }}>
        <Navbar.Brand className='brand' href="#home"><img style={{ width: '80px', height: '40px' }} src={logo} alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-nav ps-5 ms-5">
            <Nav.Link className='link' style={{ marginRight: '5%' }} href="/">Home</Nav.Link>
            <Nav.Link className='link' href="/about">About</Nav.Link>
            <NavDropdown  show={isDropdownOpen1}
             onMouseEnter={() => setIsDropdownOpen1(true)}
             onMouseLeave={() => setIsDropdownOpen1(false)}  title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/features" className='item'>Features</NavDropdown.Item>
              <NavDropdown.Item href="/services" className='item'>services</NavDropdown.Item>
              <NavDropdown.Item href="/projects" className='item'>Projects</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown show={isDropdownOpen2}
             onMouseEnter={() => setIsDropdownOpen2(true)}
             onMouseLeave={() => setIsDropdownOpen2(false)}  title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ProductDetails" className='item'>Product Details</NavDropdown.Item>
              <NavDropdown.Item href="/Cart" className='item'>Cart</NavDropdown.Item>
              <NavDropdown.Item href="/Checkout" className='item'>Checkout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='link' href="/blog">Blog</Nav.Link>
            <Nav.Link className='link' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className='cart' href="/cart"><FiShoppingCart /></Nav.Link>
        <Button className='button' variant="secondary" onClick={handleAboutClick}>SUPPORT</Button>
      </Navbar> 
    </div>
  );
  }
export default Web;