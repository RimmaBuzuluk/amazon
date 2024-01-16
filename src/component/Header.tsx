import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../App.css';

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-orange text-light" style={{height:'100px',display:'flex', alignItems:'center'}}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '36px', textDecoration: 'none'}}>Amazone</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
