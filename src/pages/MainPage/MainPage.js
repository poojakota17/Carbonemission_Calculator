import React from 'react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import {UNavBar} from '../../components/UNavBar';
import {Chart} from '../../components/Chart';
import Button from 'react-bootstrap/Button';
import { getIdentity, checkIdentityMap, addIdentityMap, getToday,fetchBalanceInfo, showSpendings, splitByItems, transformSpendings } from '../../Utils.js';
import { Doughnut, Line } from 'react-chartjs-2';
const MainPage = props => {
  const [identityId, setIdentityId] = useState(null);
  const [mapped, setMapped] = useState(false);
  const [period, setPeriod] = useState({});
  const [currentBudget, setCurrentBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);
  const [items, setItems] = useState(null);
  const [chartData, setChartData]= useState({});
  useEffect(() => {
    getToday(setPeriod);
    getIdentity(setIdentityId);
    checkIdentityMap(setMapped);
    if (!mapped && identityId)
      addIdentityMap(identityId, setMapped);

  }, [identityId]);

  useEffect(() => {
    if (period.year)
      fetchBalanceInfo(period.year, period.month, setCurrentBudget, setCurrentSpendings);
  },[period])

  useEffect(()=>{
    //chart()
  },[]
  );

  const refreshBalance = () => {
    fetchBalanceInfo(period.year, period.month, setCurrentBudget, setCurrentSpendings);
    showSpendings();
    transformSpendings(setItems, splitByItems);
    console.log(items)
    console.log(splitByItems)

  }

    return (
      <div className="App">
      <UNavBar />
        <header className="App-header">
          <AmplifyChatbot
            botName="calculatecarbonemissionbot_dev"
            botTitle="Calculate carbon emission bot"
            welcomeMessage="Hello, how can I help you?"
            textEnabled="true" />
        </header>
        <Button onClick={refreshBalance}>Refresh</Button>
        <div> Current Balance is: {currentBudget}</div>
        <div> Current Spendings is: {currentSpendings}</div>
        <Chart items={items}/>
      </div>
    );
};

export default MainPage;
//  