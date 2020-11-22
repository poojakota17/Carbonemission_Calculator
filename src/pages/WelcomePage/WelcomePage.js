import React from 'react';
import {
  Link
} from 'react-router-dom';

import { ReactComponent as Logo} from '../../logo.svg';
import {WNavBar} from '../../components/WNavBar'

const WelcomePage = props => {
  return (
    <div>
      <WNavBar />
      <h3>HERE WILL BE OUR WELCOME SCREEN</h3>
      <Link to="/user">GO TO USER PAGE</Link>
        </div>
  );
};

export default WelcomePage;
