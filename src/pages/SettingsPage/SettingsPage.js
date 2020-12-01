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
import { Container } from 'react-bootstrap';
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
    <h1 className="display-settings text-center mt-4 text-truncate">Hello, {userName ? userName : "Anonimus"}</h1>
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
          <Form.Group controlId="choose-month">
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
        </Col>
        <Col sm={3}>
        <Form.Group controlId="choose-month">
          <Form.Control as="select" onChange={(event) => {setPeriod({...period, year: event.target.value})}} value={period.year}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </Form.Control>
        </Form.Group>
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
