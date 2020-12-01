import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo} from '../../logo.svg';
import { ReactComponent as Name} from '../../name.svg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import './BalanceReport.css';

const BalanceReport = (props) => {
  const {budget, spendings} = props;
  const [type, setType] = useState('');
  const [message, setMessage] = useState('-');
  const balance = (budget != 0) ? (spendings / budget * 100) : "-";

  useEffect(()=>{
    if (balance == "-" || balance === 0) {
      setMessage("Hmmmm");
      setType("unknown");
    } else if(balance < 12.5) {
      setMessage("Fantastic!");
      setType("fantastic");
    } else if(balance < 25) {
      setMessage("Awesome:)");
      setType("awesome");
    } else if(balance < 37.5) {
      setMessage("Great.");
      setType("great");
    } else if(balance < 50) {
      setMessage("Good.");
      setType("good");
    } else if(balance < 62.5) {
      setMessage("Moderate");
      setType("moderate");
    } else if(balance < 75) {
      setMessage("Be mindful!");
      setType("caution_one");
    } else if(balance < 87.5) {
      setMessage("Think twice!");
      setType("caution_two");
    } else if(balance < 100) {
      setMessage("Caution!");
      setType("caution_three");
    } else {
      setMessage("Oh:(");
      setType("bad");
    }
  },[balance]
  );

  return (
    <>
    <Row className="mb-3 ml-1">
    <Col><Alert variant={type}>
      <Alert.Heading>{message}</Alert.Heading>
      <p><small>You spent <strong>{balance}%</strong> of your budget</small></p>
    </Alert>
    </Col>
    <Col>
    <p>Emission: <strong>{spendings ? spendings : "You haven't logged emission for this period"}<small>KgCo2</small></strong></p>
    <p>Budget: <strong>{budget ? budget : "You haven't set your budget for this period yet"}<small>KgCo2</small></strong></p>
    </Col>
    </Row>
    </>
  )
};

export default BalanceReport;
