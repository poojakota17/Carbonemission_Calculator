import React from 'react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Update } from '../../svg/update.svg';
import { useState, useEffect } from 'react';
import { UNavBar } from '../../components/UNavBar';
import { Chart } from '../../components/Chart';
import { BalanceReport } from '../../components/BalanceReport';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Year from '../../components/Period/Year';
import Month from '../../components/Period/Month';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { getIdentity, checkIdentityMap, addIdentityMap, getToday, fetchBalanceInfo, allSpendings, splitByItems, periodSpendings } from '../../Utils.js';

const MainPage = props => {
  const [identityId, setIdentityId] = useState(null);
  const [mapped, setMapped] = useState(false);
  const [period, setPeriod] = useState({});
  const [currentBudget, setCurrentBudget] = useState(0);
  const [currentSpendings, setCurrentSpendings] = useState(0);
  const [items, setItems] = useState(null);
  const [totalItems, setTotalItems] = useState(null);
  const [chartData, setChartData]= useState({});
  useEffect(() => {
    getToday(setPeriod);
    getIdentity(setIdentityId);
    checkIdentityMap(setMapped);
    if (!mapped && identityId)
      addIdentityMap(identityId, setMapped);
    allSpendings(setTotalItems, splitByItems);
  }, [identityId]);

  useEffect(() => {
    console.log(period)
    if (period.year) {
      fetchBalanceInfo(period.year, period.month, setCurrentBudget, setCurrentSpendings);
      periodSpendings(period.year, period.month, setItems, splitByItems);
    }
  }, [period])

  const refreshBalance = () => {
    fetchBalanceInfo(period.year, period.month, setCurrentBudget, setCurrentSpendings);
    periodSpendings(period.year, period.month, setItems, splitByItems);
    allSpendings(setTotalItems, splitByItems);
  }

  return (
    <>
    <UNavBar />
    <Row className="mt-3">
      <Col xs={12} sm={6}>
        <AmplifyChatbot
          botName="calculatecarbonemissionbot_dev"
          botTitle="Calculate carbon emission bot"
          welcomeMessage="Hello, I am here to log your emission. To start, please type log/calculate my emission."
          textEnabled="true" />
      </Col>
      <Col xs={12} sm={6}>
        <Form>
        <Row className="ml-1">
          <Col sm={4} md={3}>Period:</Col>
          <Col sm={3} className="px-sm-0">
            <Month setDate={(m) => {setPeriod({...period, month: m})}} month={period.month}/>
          </Col>
          <Col sm={3}>
            <Year setDate={(y) => {setPeriod({...period, year: y})}} year={period.year}/ >
          </Col>
        </Row>
        </Form>
        <BalanceReport budget={currentBudget} spendings={currentSpendings}/>
        <Row className="m-1 mb-3 refresh">
          <Col sm={6}>After submitting emissison please click to refresh the chart: </Col>
          <Col sm={"auto"}><Button onClick={refreshBalance} variant="orange"><Update/> Refresh</Button></Col>
        </Row>
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="nav-fill rounded" >
          <Tab eventKey="all" title="Total">
            <Chart items={totalItems} />
          </Tab>
          <Tab eventKey="period" title="Current Period">
            <Chart items={items} />
          </Tab>
        </Tabs>
      </Col>
    </Row>
    </>
  );
};

export default MainPage;
//
