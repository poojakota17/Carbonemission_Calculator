import React from 'react';
import { API } from 'aws-amplify';
import  { useState, useEffect } from 'react';
import {UNavBar} from '../../components/UNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Bar} from 'react-chartjs-2';
import { listBalances} from '../../graphql/queries';
import { fetchUserInfo, getToday, fetchBalanceInfo, updateCurrentBalance, showAllBalances, updateUserName } from '../../Utils.js';
import { Container } from 'react-bootstrap';

const SettingsPage = props => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [currentBudget, setCurrentBudget] = useState(0);
  const [newBudget, setNewBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);
  const [period, setPeriod] = useState({});
  const [chartData, setChartData]= useState({});
  const [data, setData]= useState({});
  useEffect(() => {
    getToday(setPeriod);
    fetchUserInfo(setUser,setUserName);
    console.log(period)
   // chart();
   getData();
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
    console.log("update current balence", updateCurrentBalance)
    setNewBudget(0);
  };

  function handleChange(event) {
    const { value } = event.target;
    setNewName(value)
  }
// For Chart:
  async function getData(){
    let period=[];
    let cbud=[];
    let cspend=[];

    const bal= await API.graphql({query: listBalances});
    console.log("list balences", bal);
    console.log(" ",bal.data.listBalances.items)
    for( const dataObj of bal.data.listBalances.items ){
      period.push(dataObj.period)
      cbud.push(parseInt(dataObj.cbudget))
      cspend.push(parseInt(dataObj.cspendings))
    }
    console.log("period, jjkddkd", period, cbud,cspend);
    const {data:{listBalances: {items}}}=bal;
    console.log(bal)
    console.log("items in balence", items);
    setChartData({
      options:{
        tooltip:'index',
        title:{
          display: true,
          text: 'Monthly spendings'
        }
      },
    labels:period,
      datasets:[
         {
           label:"Total spending",
            backgroundColor: 'rgba(75,193,193,0.3)',
            data:cbud,
         borderColor:[ 'rgb(0,99,132)' ],
      hoverBackgroundColor: 'rgba(75,193,193,0.9)'

    },
    {
      label:" Budget",
      data: cspend,
      backgroundColor:[ 'rgba(255, 99, 132, 0.2)'],
      borderColor:[ 'rgb(0,99,132)'],
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)'
    }
   ]
  
  })
 
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
    <Button onClick={showAllBalances}>All Budgets</Button>
    <Container>
    <div >
      <Bar data={chartData}/>
    </div>
    </Container>
    <div> 
    </div>
    </>
  );
};

export default SettingsPage;
