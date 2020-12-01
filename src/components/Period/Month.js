import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Month(props) {

  const {setDate, month} = props;

  function updateDate(event) {
    setDate(event.target.value);
  }

  return (
    <Form.Group controlId="choose-month">
      <Form.Control as="select" onChange={updateDate} value={month}>
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
  );
};
