import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import config from './aws-exports';
import Amplify from 'aws-amplify';
Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default withAuthenticator(App);
