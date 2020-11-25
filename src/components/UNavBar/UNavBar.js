import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../logo.svg';
import { ReactComponent as Name} from '../../name.svg';
import { API, Auth } from 'aws-amplify';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import './UNavBar.css';

const UNavBar = () => {
  async function handleClick() {
    await Auth.signOut();
  }

  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">
        < Logo />{' '}
        < Name className="name-logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/user/static" className="mx-3">Manjiri's Static Page</Nav.Link>
        <Nav.Link href="/about" className="mx-3">About Us</Nav.Link>
        <Nav.Link href="/user/settings" className="mx-3">Settings</Nav.Link>
        <Button variant="ubar" className="mx-3" onClick={handleClick} href="/user">Log Out</Button>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UNavBar;
