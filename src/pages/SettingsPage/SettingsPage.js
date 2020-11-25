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
  const [period, setPeriod] = useState({});
  const [today, setToday] = useState({});

  useEffect(() => {
    getToday();
    fetchUserInfo();
    fetchBalanceInfo();
  }, []);

  function getToday() {
    const today = new Date();
    setPeriod({year:today.getFullYear(), month: (today.getMonth() + 1)})
    setToday({year:today.getFullYear(), month: (today.getMonth() + 1)})
  }

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
    .then((data) => console.log(data)).catch(err => console.log(err));
  }

  function createNewBalance() {
    const params = {
      'cbudget': currentBudget,
      'cspendings': currentSpendings,
      'period': `${period.year}-${period.month}-01Z`
    }
    API.graphql({ query: createBalanceMutation, variables: { input: params } }).catch(err => console.log(err));
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

  function handleBudgetSubmit (event) {
    event.preventDefault();
    console.log(currentBudget);
    console.log(period)
    createNewBalance();
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
    Update your budget:
    <Form onSubmit={handleBudgetSubmit}>
      <Form.Group controlId="update-budget-goal" className="m-0">
        <Form.Label>Goal:</Form.Label>
        <Form.Control type="number" onChange={(event) => {setCurrentBudget(event.target.value)}}placeholder="Loading data..."/>
      </Form.Group>
      <Form.Group controlId="choose-month">
    <Form.Label>Month:</Form.Label>
        <Form.Control as="select" onChange={(event) => {setPeriod({...period, month: event.target.value})}}>
          <option value="01">Jan</option>
          <option value="02">Feb</option>
          <option value="03">March</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="choose-month">
    <Form.Label>Year:</Form.Label>
        <Form.Control as="select" onChange={(event) => {setPeriod({...period, year: event.target.value})}}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Form.Control>
      </Form.Group>
          <Button variant="secondary" type="submit">Update</Button>
    </Form>
    <Button onClick={fetchBalanceInfo}>All Budgets</Button>
    </>
  );
};

export default SettingsPage;
