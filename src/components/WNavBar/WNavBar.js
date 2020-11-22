import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';

import './WNavBar.css';

const WNavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        < Logo />{' '}
        Carbon FootPrint
      </Navbar.Brand>
    </Navbar>
  );
};

export default WNavBar;
