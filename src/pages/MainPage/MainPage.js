import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
//import { listUsers } from '../../graphql/queries';
//import { createUser as createUserMutation, updateUser as updateUserMutation } from '../../graphql/mutations';
import {UNavBar} from '../../components/UNavBar'

const initialFormState = { username: '', budget: '' }
const MainPage = props => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
<<<<<<< HEAD
  //  fetchUsers();
  }, []);

  /*async function fetchUsers() {
=======
    fetchUsers();
  }, []);

  async function fetchUsers() {
>>>>>>> 09fdf6b... added static page
    console.log("In fetchuser function")
    const apiData = await API.graphql({ query: listUsers });
    console.log("In fetchuser , after api data ", apiData)
    setUsers(apiData.data.listUsers.items);
  }
<<<<<<< HEAD

=======
  
>>>>>>> 09fdf6b... added static page
  async function createUsers() {
    if (!formData.username || !formData.budget) return;
    await API.graphql({ query: createUserMutation, variables: { input: formData } });
    console.log(" in create user ")
    setUsers([ ...users, formData ]);
    console.log(" printing setusers", setUsers)
    setFormData(initialFormState);
    fetchUsers();
<<<<<<< HEAD
  }*/
=======
  } 
>>>>>>> 09fdf6b... added static page
    return (
      <div className="App">
      <UNavBar />
        <header className="App-header">
<<<<<<< HEAD


=======
          
          <p><Logo /></p>
>>>>>>> 09fdf6b... added static page
          <div style={{marginBottom: 30}}></div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
<<<<<<< HEAD

=======
            
>>>>>>> 09fdf6b... added static page
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
<<<<<<< HEAD
      
=======
      <button onClick={createUsers}> Okay </button>
        
        <AmplifySignOut />
>>>>>>> 09fdf6b... added static page
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
