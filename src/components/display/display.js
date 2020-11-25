import React, { useState, useEffect } from 'react';
import './UserPage.css';
import { Auth } from 'aws-amplify';
//import Button from 'react-bootstrap/Button'

import { API } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { createUser as createUserMutation, updateUser as updateUserMutation } from '../../graphql/mutations';


function display() {

  const [user, setUser] = useState(null);
  const [budget, setBudgets] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    (async function() {	
      try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log("in async function", user.attributes.email)
      }
      catch {
      setUser(null);
      }
      }
      
    
      )();
     
      fetchUsers()
   
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  async function fetchUsers() {	
    const apiData = await API.graphql({ query: listUsers });	
    console.log("items are: ", apiData)	
    setUsers(apiData.data.listUsers.items);	
  }
 
  async function createBudget() {
    console.log("In create budget()")
    if (!formData.username || !formData.budget) return;
    await API.graphql({ query: createFeedbackMutation, variables: { input: formData } });
    setBudgets([ ...budgets, formData ]);
    setFormData({});
    fetchFeedbacks();
  }

  async function updateBudget({ id }) {
    const newUserArray = users.filter(user => user.id !== id);
    setFeedbacks(newUserArray);
    await API.graphql({ query: updateUserMutation, variables: { input: { id } }});
  }

  return (
    <div>Hello User {}
     
      <input
        onChange={e => setFormData({ ...formData, 'budget': e.target.value})}
        placeholder="Set Budget Value"
      />
      <button onClick={createBudget}>OK</button> <div style={{marginBottom: 30}}>
       
      </div>
      
    </div>
  );
}

export default display;