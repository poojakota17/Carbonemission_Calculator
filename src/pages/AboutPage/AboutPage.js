import React, {useState, useEffect } from 'react';
import {
  Link
} from 'react-router-dom';
import { ReactComponent as Logo} from '../../logo.svg';
import { API, Auth } from 'aws-amplify';
import {WNavBar} from '../../components/WNavBar';
import {UNavBar} from '../../components/UNavBar';

const AboutPage = props => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      await Auth.currentAuthenticatedUser()
      setUser(true)
    }  catch(e)
    {   setUser(false)   }
  }

  return (
    <div>
    {user ? <UNavBar /> : <WNavBar />}
    We are cool girls!
    Go, Girl!
        </div>
  );
};

export default AboutPage;
