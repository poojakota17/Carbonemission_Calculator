import React, { Component } from 'react';
//import { StaticPage } from '.';
//import './StaticPage.css';
import {
    Link
  } from 'react-router-dom';
//import { ReactComponent as Logo} from '../../logo.svg';
import {WNavBar} from '../../components/WNavBar'


  const StaticPage = props => {
    return (
      <div>
        <WNavBar />
        <h3>HERE WILL BE OUR WELCOME SCREEN</h3>
        <Link to="/static">StaticPage</Link>
      </div>
    );
  };
  



export default StaticPage;
