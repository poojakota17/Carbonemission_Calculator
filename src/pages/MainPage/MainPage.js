import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';

const MainPage = props => {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <p><Logo /></p>
            
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <AmplifyChatbot
            botName="calculatecarbonemissionbot_dev"
            botTitle="Calculate carbon emission bot"
            welcomeMessage="Hello, how can I help you?"
            textEnabled="true" />
        </header>

        <AmplifySignOut />
      </div>
    );
};

export default MainPage;
