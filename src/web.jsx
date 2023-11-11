// import React, { useEffect, useState } from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
// import logo from './images/logo.png';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import cart from './pages/Cart';

// const Web = () => { 
//   const [navbarBackground, setNavbarBackground] = useState('transparent');
//   const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
//   const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const navbarColor = scrollPosition > 80 ? '#052c65' : 'transparent'; // Change 'yourDesiredColor' to the desired background color
//       setNavbarBackground(navbarColor);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   const cartItemCount = Array.isArray(cart) ? cart.length : 0

//   return (
//     <div>
//       <Navbar expand="lg" className="navbar fixed-top container-fluid" style={{ backgroundColor: navbarBackground }}>
//         <Navbar.Brand className='brand' href="#home"><img style={{ width: '80px', height: '40px' }} src={logo} alt='logo' /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto custom-nav ps-5 ms-5">
//             <Nav.Link className='link' style={{ marginRight: '5%' }} link to="/">Home</Nav.Link>
//             <Nav.Link className='link' href="/about">About</Nav.Link>
//             <NavDropdown  show={isDropdownOpen1}
//              onMouseEnter={() => setIsDropdownOpen1(true)}
//              onMouseLeave={() => setIsDropdownOpen1(false)}  title="Pages" id="basic-nav-dropdown">
//               <NavDropdown.Item> <Link to="/features" className='item'>features</Link></NavDropdown.Item>
//               <NavDropdown.Item> <Link to="/services" className='item'>services</Link></NavDropdown.Item>
//               <NavDropdown.Item> <Link to="/products" className='item'>Product</Link></NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown show={isDropdownOpen2}
//              onMouseEnter={() => setIsDropdownOpen2(true)}
//              onMouseLeave={() => setIsDropdownOpen2(false)}  title="Shop" id="basic-nav-dropdown">          
//               <NavDropdown.Item> <Link to="/Details" className='item'>Product Details</Link></NavDropdown.Item>
//               <NavDropdown.Item> <Link to="/Cart" className='item'>Cart</Link></NavDropdown.Item>
//               <NavDropdown.Item> <Link to="/Checkout" className='item'>Checkout</Link></NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link className='link' link to="/blog">Blog</Nav.Link>
//             <Nav.Link to="/contact" className='link' >Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
        

// <Link className='cart' to="/cart">
//   <FiShoppingCart />
//   <span className="badge" style={{ color: 'black' }}>{cartItemCount}</span>
 
// </Link>

//         <Button className='button' variant="secondary" >SUPPORT</Button>
//       </Navbar> 
//     </div>
//   );
//   }
// export default Web;

import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import the useSelector hook

const Web = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const cart = useSelector((state) => state.cart); // Get the cart state from the Redux store

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarColor = scrollPosition > 80 ? '#052c65' : 'transparent';
      setNavbarBackground(navbarColor);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the total quantity of products in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar expand="lg" className="navbar fixed-top container-fluid" style={{ backgroundColor: navbarBackground }}>
        <Navbar.Brand className='brand' href="#home"><img style={{ width: '80px', height: '40px' }} src={logo} alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-nav ps-5 ms-5">
            <Nav.Link className='link' style={{ marginRight: '5%' }} link to="/">Home</Nav.Link>
            <Nav.Link className='link' href="/about">About</Nav.Link>
            <NavDropdown show={isDropdownOpen1}
              onMouseEnter={() => setIsDropdownOpen1(true)}
              onMouseLeave={() => setIsDropdownOpen1(false)} title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/features" className='item'>features</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/services" className='item'>services</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/products" className='item'>Product</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown show={isDropdownOpen2}
              onMouseEnter={() => setIsDropdownOpen2(true)}
              onMouseLeave={() => setIsDropdownOpen2(false)} title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/Details" className='item'>Product Details</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/Cart" className='item'>Cart</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to="/Checkout" className='item'>Checkout</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='link' link to="/blog">Blog</Nav.Link>
            <Nav.Link to="/contact" className='link' >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Link className='cart' to="/cart">
          <FiShoppingCart />
          <span className="cart-count">{totalQuantity}</span> {/* Display the total quantity */}
        </Link>

        <Button><Link to="/Login" className='button' variant="secondary" >SUPPORT</Link></Button>
      </Navbar>
    </div>
  );
};

export default Web;
