import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { createUser as createUserMutation, updateUser as updateUserMutation } from '../../graphql/mutations';

const initialFormState = { username: '', budget: '' }
const MainPage = props => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    console.log("In fetchuser function")
    const apiData = await API.graphql({ query: listUsers });
    console.log("In fetchuser , after api data ", apiData)
    setUsers(apiData.data.listUsers.items);
  }
  
  async function createUsers() {
    if (!formData.username || !formData.budget) return;
    await API.graphql({ query: createUserMutation, variables: { input: formData } });
    console.log(" in create user ")
    setUsers([ ...users, formData ]);
    console.log(" printing setusers", setUsers)
    setFormData(initialFormState);
    fetchUsers();
  } 
    return (
      <div className="App">
        <header className="App-header">
          
          <p><Logo /></p>
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
        <input
        onChange={e => setFormData({ ...formData, 'username': e.target.value})}
        placeholder="Create an Username"
        value={formData.username}
      />
      <input
        onChange={e => setFormData({ ...formData, 'budget': e.target.value})}
        placeholder=" Set Up a monthly budget"
        value={formData.budget}
      />
      <button onClick={createUsers}> Okay </button>
        
        <AmplifySignOut />
      </div>
    );
};

export default MainPage;

/*
 <input
        onChange={e => setFormData({ ...formData, 'budget': e.target.value})}
        placeholder="Set Budget Value"
      />
      <button onClick={createBudget}>OK</button>
*/