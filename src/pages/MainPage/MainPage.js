import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
<<<<<<< HEAD
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { createUser as createUserMutation, updateUser as updateUserMutation } from '../../graphql/mutations';

const MainPage = props => {
  const [users, setUsers] = useState(null);
  const [budgets, setBudgets] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    (async function() {	
      try {
      const user = await Auth.currentAuthenticatedUser();
      setUsers(user);
      console.log("in async function", user.attributes.email)
      }
      catch {
      setUsers(null);
      }
      }
      )();
      fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function fetchUsers() {
    console.log("in fetch")	
    const apiData = await API.graphql({ query: listUsers });	
    console.log("items are: ", apiData)	
    setUsers(apiData.data.listUsers.items);	
  }
  /*
  async function createBudget() {
    console.log("In create budget()")
   // if (!formData.username || !formData.budget) return;
    await API.graphql({ query: createUserMutation, variables: { input: formData } });
    setBudgets([ ...budgets, formData ]);
    setFormData({});
    fetchUsers();
  }

  async function updateBudget({ id }) {
    const newUserArray = users.filter(user => user.id !== id);
    setBudgets(newUserArray);
    await API.graphql({ query: updateUserMutation, variables: { input: { id } }});
  }
*/
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <p><Logo /></p>
        
            
          </p>
          <div style={{marginBottom: 30}}></div>
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
=======
import { ReactComponent as Logo } from '../../logo.svg';

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
          textEnabled="true"
        />
      </header>

      <AmplifySignOut />
    </div>
  );
>>>>>>> 14ea3f3201e6d68c8daf1941452fc9ee3b3bf25a
};

export default MainPage;

/*
 <input
        onChange={e => setFormData({ ...formData, 'budget': e.target.value})}
        placeholder="Set Budget Value"
      />
      <button onClick={createBudget}>OK</button>
*/