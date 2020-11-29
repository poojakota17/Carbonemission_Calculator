import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Chart extends PureComponent {

  render() {
    return (
      <BarChart
        layout={"vertical"}
        width={500}
        height={400}
        data={this.props.items}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name"/>
        <Tooltip />
        <Bar dataKey="value" fill="#f1552d" />
      </BarChart>
    );
  }
}
