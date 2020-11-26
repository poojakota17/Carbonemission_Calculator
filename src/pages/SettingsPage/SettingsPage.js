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
        <Form.Control as="select" onChange={(event) => {setPeriod({...period, month: event.target.value})}} placeholder={today.month}>
          <option value="01" selected={1 === period.month}>Jan</option>
          <option value="02" selected={2 === period.month}>Feb</option>
          <option value="03" selected={3 === period.month}>March</option>
          <option value="04" selected={4 === period.month}>April</option>
          <option value="05" selected={5 === period.month}>May</option>
          <option value="06" selected={6 === period.month}>June</option>
          <option value="07" selected={7 === period.month}>July</option>
          <option value="08" selected={8 === period.month}>August</option>
          <option value="09" selected={9 === period.month}>September</option>
          <option value="10" selected={10 === period.month}>October</option>
          <option value="11" selected={11 === period.month}>November</option>
          <option value="12" selected={12 === period.month}>December</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="choose-month">
    <Form.Label>Year:</Form.Label>
        <Form.Control as="select" onChange={(event) => {setPeriod({...period, year: event.target.value})}} >
          <option value="2021" selected={2021 === period.year}>2021</option>
          <option value="2020" selected={2020 === period.year}>2020</option>
          <option value="2019" selected={2019 === period.year}>2019</option>
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
