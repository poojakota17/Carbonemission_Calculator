import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import  { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { listBalances } from '../../graphql/queries';
import { createBalance as createBalanceMutation, updateBalance as updateBalanceMutation } from '../../graphql/mutations';
import {UNavBar} from '../../components/UNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/*
import { Auth } from 'aws-amplify';

Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/
const SettingsPage = props => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [currentBudget, setCurrentBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);

  useEffect(() => {
    fetchUserInfo();
    fetchBalanceInfo();
  }, []);

  function fetchUserInfo() {
    Auth.currentAuthenticatedUser()
    .then(user => {
        setUser(user)
        if (user.attributes["custom:nickname"])
          setUserName(user.attributes["custom:nickname"])
        setUserName(user.attributes["custom:nickname"])
        setLoading(false)
    })
  }

  function fetchBalanceInfo() {
    API.graphql({ query: listBalances })
    .then((data) => console.log(data));
  }

  function createNewBalance() {
    API.graphql({ query: createBalanceMutation, variables: { input: {'cbudget': 4, 'cspendings': 6, 'period': "2020-04-01Z"} } }).catch(err => console.log(err));
  }


  function updateUserName() {
    if (newName)
      Auth.updateUserAttributes(user, {"custom:nickname": newName})
        .then(console.log("success!"))
  }

  function handleSubmit (event) {
    event.preventDefault();
    updateUserName();
    setNewName(null)
  };

  function handleChange(event) {
     const { value } = event.target;
    setNewName(value)
  }

  const defaultNameInput = <Form.Control as="textarea" rows={1} placeholder="Loading data..."/>

  const customizedNameInput = <Form.Control as="textarea" rows={1} onChange={handleChange} placeholder={userName ? userName : "Anonimus"}/>

  return (
    <>
    <UNavBar />
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="update-name" className="m-0">
        <Form.Label>Name:</Form.Label>
        {user ? customizedNameInput : defaultNameInput}
      </Form.Group>
          <Button variant="secondary" type="submit">Update
          </Button>
    </Form>
    <Button onClick={fetchBalanceInfo}>All Budgets</Button>
    <Button onClick={createNewBalance}>Create Budget</Button>
    </>
  );
};

export default SettingsPage;
