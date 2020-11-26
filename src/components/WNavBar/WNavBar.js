import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../logo.svg';
import { ReactComponent as Name} from '../../name.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import './WNavBar.css';

const WNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">
        < Logo />{' '}
        < Name className="name-logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about" className="mx-3">About Us</Nav.Link>
        <Button variant="custom" href="/user">Log In</Button>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default WNavBar;
