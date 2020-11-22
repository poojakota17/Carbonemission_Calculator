import React from 'react';
import {
  Link
} from 'react-router-dom';

const WelcomePage = props => {
  return (
    <div>
      <h3>HERE WILL BE OUR WELCOME SCREEN</h3>
      <Link to="/user">GO TO USER PAGE</Link>
        </div>
  );
};

export default WelcomePage;
