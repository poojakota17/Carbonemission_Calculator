import React from 'react';
import  { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { listBalances,  balanceByPeriod} from '../../graphql/queries';
import { createBalance as createBalanceMutation, updateBalance as updateBalanceMutation } from '../../graphql/mutations';
import {UNavBar} from '../../components/UNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SettingsPage = props => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [currentBudget, setCurrentBudget] = useState(0);
  const [newBudget, setNewBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);
  const [period, setPeriod] = useState({});
  const [today, setToday] = useState({});

  useEffect(() => {
    fetchUserInfo();
    getToday();
    console.log(period)
  }, []);

  useEffect(() => {
    fetchBalanceInfo(period.year, period.month);
  },[period])

  function getToday() {
    const today = new Date();
    setPeriod({year:today.getFullYear(), month: (today.getMonth() + 1)})
    setToday({year:today.getFullYear(), month: (today.getMonth() + 1)})
  }

  function fetchUserInfo() {
    Auth.currentAuthenticatedUser()
    .then(user => {
        setUser(user)
        console.log(user)
        if (user.attributes["custom:nickname"])
          setUserName(user.attributes["custom:nickname"])
    })
  }

  function fetchBalanceInfo(year, month) {
    API.graphql({ query: balanceByPeriod, variables: {period: `${year}-${month}-01Z`, limit: 1} })
    .then((data) => {
      const {data: {balanceByPeriod: {items}} } = data;
      if (items.length >= 1) {
        setCurrentBudget(items[0].cbudget);
        setCurrentSpendings(items[0].cspendings);}
      else {
        setCurrentBudget(0);
        setCurrentSpendings(0);
      }
      }).catch(err => console.log(err));
  }

  function createNewBalance() {
    const params = {
      'cbudget': newBudget,
      'cspendings': currentSpendings,
      'period': `${period.year}-${period.month}-01Z`
    }
    API.graphql({ query: createBalanceMutation, variables: { input: params } }).catch(err => console.log(err));
  }

  function showAll() {
    API.graphql({query: listBalances}).then((data) => console.log(data)).catch(e => console.log(e))
  }

  async function updateCurrentBalance() {
    try {
      const params = {period: `${period.year}-${period.month}-01Z`, limit: 1}
      const {data: {balanceByPeriod: {items}}} = await API.graphql({query: balanceByPeriod, variables: params});
      if (items.length >= 1) {
        const newParams = {
          id: items[0].id,
          cbudget: newBudget
        }
        const updatedBudget = await API.graphql({ query: updateBalanceMutation, variables: {input: newParams}});
        setCurrentBudget(newBudget);
      }
      else
        createNewBalance();
  }
      catch(error) { console.log(error);
        console.log("Smth went wrong")
      }
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
    updateCurrentBalance();
    setNewBudget(0);
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
    Update your budget (current value: {currentBudget ? currentBudget : "You haven't set your budget for this period yet"}):
    <Form onSubmit={handleBudgetSubmit}>
      <Form.Group controlId="update-budget-goal" className="m-0">
        <Form.Label>Goal:</Form.Label>
        <Form.Control type="number" onChange={(event) => {setNewBudget(event.target.value)}} placeholder="Set new goal"/>
      </Form.Group>
      <Form.Group controlId="choose-month">
        <Form.Label>Month:</Form.Label>
        <Form.Control as="select" onChange={(event) => {setPeriod({...period, month: event.target.value})}} value={period.month}>
          <option value="01">Jan</option>
          <option value="02">Feb</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="choose-month">
    <Form.Label>Year:</Form.Label>
        <Form.Control as="select" onChange={(event) => {setPeriod({...period, year: event.target.value})}} value={period.year}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Form.Control>
      </Form.Group>
          <Button variant="secondary" type="submit">Update</Button>
    </Form>
    <Button onClick={showAll}>All Budgets</Button>
    </>
  );
};

export default SettingsPage;

/*
const todoDetails = {
  id: 'some_id',
  description: 'My updated description!'
};

const updatedTodo = await API.graphql({ query: mutations.updateTodo, variables: {input: todoDetails}}));
copy
*/
