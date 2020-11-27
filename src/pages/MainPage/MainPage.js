import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import {UNavBar} from '../../components/UNavBar'

const MainPage = props => {

  useEffect(() => {

  }, []);

    return (
      <div className="App">
      <UNavBar />
        <header className="App-header">
          <AmplifyChatbot
            botName="calculatecarbonemissionbot_dev"
            botTitle="Calculate carbon emission bot"
            welcomeMessage="Hello, how can I help you?"
            textEnabled="true" />
        </header>
      </div>
    );
};

export default MainPage;
