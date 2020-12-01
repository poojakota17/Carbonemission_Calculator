import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Year(props) {

  const {setDate, year} = props;

  function updateDate(event) {
    setDate(event.target.value);
  }

  return (
    <Form.Group controlId="choose-month">
      <Form.Control as="select" onChange={updateDate} value={year}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </Form.Control>
    </Form.Group>
  );
};
