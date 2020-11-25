import React from 'react';
import {
  Link
} from 'react-router-dom';
import { ReactComponent as Logo} from '../../logo.svg';
import {WNavBar} from '../../components/WNavBar';

const AboutPage = props => {
  return (
    <div>
    <WNavBar />
    We are cool girls!
    Go, Girl!
        </div>
  );
};

export default AboutPage;
