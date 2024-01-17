import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../App.css';

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" style={{height:'100px',display:'flex', alignItems:'center'}}>
      
        <Navbar.Brand href="/" style={{ fontSize: '36px', textDecoration: 'none', marginLeft:'10px', color: 'blue'}}>Agency Amazon</Navbar.Brand>
      
    </Navbar>
  );
}

export default Header;
