import React from 'react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import {UNavBar} from '../../components/UNavBar';
import Button from 'react-bootstrap/Button';
import { getIdentity, checkIdentityMap, addIdentityMap, getToday,fetchBalanceInfo } from '../../Utils.js';

const MainPage = props => {
  const [identityId, setIdentityId] = useState(null);
  const [mapped, setMapped] = useState(false);
  const [period, setPeriod] = useState({});
  const [currentBudget, setCurrentBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);

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

  const refreshBalance = () => {
    fetchBalanceInfo(period.year, period.month, setCurrentBudget, setCurrentSpendings);
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
      </div>
    );
};

export default MainPage;
