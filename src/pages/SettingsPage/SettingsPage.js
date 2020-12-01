import React from 'react';
import { API } from 'aws-amplify';
import  { useState, useEffect } from 'react';
import {UNavBar} from '../../components/UNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BalanceBar } from '../../components/BalanceBar';
import { fetchUserInfo, getToday, fetchBalanceInfo, updateCurrentBalance, updateUserName } from '../../Utils.js';
import Year from '../../components/Period/Year';
import Month from '../../components/Period/Month';
import './SettingsPage.css';

const SettingsPage = props => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [currentBudget, setCurrentBudget] = useState(0);
  const [newBudget, setNewBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);
  const [period, setPeriod] = useState({});

  useEffect(() => {
    getToday(setPeriod);
    fetchUserInfo(setUser,setUserName);
  }, []);

  useEffect(() => {
    if (period.year)
      fetchBalanceInfo(period.year, period.month, setCurrentBudget, setCurrentSpendings);
  },[period])


  function handleSubmit (event) {
    event.preventDefault();
    if (newName)
      updateUserName(user, newName)
    setNewName(null)
  };

  function handleBudgetSubmit (event) {
    event.preventDefault();
    updateCurrentBalance(period, newBudget, currentSpendings, setCurrentBudget);
    setNewBudget(0);
  };

  function handleChange(event) {
    const { value } = event.target;
    setNewName(value)
  }

  return (
    <>
    <UNavBar />
    <h1 className="display-settings text-center mt-4 text-truncate">Hello, {userName ? userName : "Friend"}</h1>
    <p className="display-settings">Personal information:</p>
    <Form onSubmit={handleSubmit} className="my-3">
      <Row className="mt-4">
        <Col sm={8} md={6}>
          <Form.Group as={Row} controlId="update-name" className="m-0">
            <Form.Label column sm={6}>Edit your name:</Form.Label>
            <Col><Form.Control as="textarea" rows={1} onChange={handleChange} placeholder="Set new name"/></Col>
          </Form.Group>
        </Col>
        <Col  className="mx-3">
          <Button variant="orange" type="submit">Update
          </Button>
          </Col>
      </Row>
    </Form>
    <p className="display-settings">Budget settings:</p>
    <Form onSubmit={handleBudgetSubmit}>
      <Row className="ml-1">
        <Col sm={4} md={3}>Choose period:</Col>
        <Col sm={3} className="px-sm-0">
          <Month setDate={(m) => {setPeriod({...period, month: m})}} month={period.month}/>
        </Col>
        <Col sm={3}>
          <Year setDate={(y) => {setPeriod({...period, year: y})}} year={period.year}/ >
        </Col>
      </Row>
      <Row className="mb-3 ml-1">
        <Col xs={4} sm={4}  md={3}>Current Value:</Col>
        <Col className="px-sm-0"><strong>{currentBudget ? currentBudget : "You haven't set your budget for this period yet"}</strong></Col>
      </Row>
      <Row className="mb-3 ml-1">
        <Col sm={4}  md={3}>Edit budget:</Col>
        <Col sm={3} className="px-sm-0">
          <Form.Group controlId="update-budget-goal" className="m-0">
            <Form.Control type="number" onChange={(event) => {setNewBudget(event.target.value)}} placeholder="Set new goal"/>
          </Form.Group>
        </Col>
        <Col><Button variant="orange" type="submit">Update</Button></Col>
      </Row>
    </Form>
    <Row>
      <Col sm={8} md={6}>
        <BalanceBar period={period} spendings={currentSpendings} budget={currentBudget}/>
      </Col>
    </Row>
    </>
  );
};

export default SettingsPage;
