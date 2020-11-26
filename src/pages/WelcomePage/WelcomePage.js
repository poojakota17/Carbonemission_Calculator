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
<<<<<<< HEAD
    </>
=======
      <Link to="/user">GO TO USER PAGE</Link>
      <Link to="/static"> Go to static page</Link>
        </div>
>>>>>>> 09fdf6b... added static page
  );
};

export default WelcomePage;
