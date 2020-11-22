import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import config from './aws-exports';
import Amplify from 'aws-amplify';

//import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'

Amplify.configure(config);

function App() {
  const [userEmail, setUserEmail] = useState("");
  async function getEmail() {
		console.log("Getting email...");
		Auth.currentUserInfo()
			.then((res) => {
				setUserEmail(res.attributes.email);

				console.log("Email is: " + res.attributes.email + "!");
			})
			.catch((err) => {
				console.error(err);
			});
  }
  useEffect(() => {
		
		getEmail();
	}, []);
  return (
    <div className="App">
      <header className="App-header">
        <h>{userEmail}</h>
     
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
