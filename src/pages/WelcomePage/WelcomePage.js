import React from 'react';
import {
  Link
} from 'react-router-dom';

import { ReactComponent as Logo} from '../../logo.svg';
import {WNavBar} from '../../components/WNavBar'

const WelcomePage = props => {
  return (
    <>
      <WNavBar />
      <h3>HERE WILL BE OUR WELCOME SCREEN</h3>
    </>
  );
};

export default WelcomePage;
