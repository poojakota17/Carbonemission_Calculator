import React, { PureComponent } from 'react';
import {Bar} from 'react-chartjs-2';

export default class BalanceBar extends PureComponent {

  render() {
    const balanceLabel = `${this.props.period.year}-${this.props.period.month}`
    const balanceData = [
      {
        label:"Total spending",
        backgroundColor: 'rgba(56,161,74,0.3)',
        data:[this.props.spendings],
        borderColor:[ 'rgb(0,99,132)' ],
        hoverBackgroundColor: 'rgba(56,161,74,0.9)'
      },
      {
        label:" Budget",
        data: [this.props.budget],
        backgroundColor:[ 'rgba(241,85,45, 0.2)'],
        borderColor:[ 'rgb(0,99,132)'],
        hoverBackgroundColor: 'rgba(241,85,45, 0.9)'
      }
    ]
    const barData = {
      options: {
        tooltip:'index',
        title: {
          display: true,
          text: 'Monthly spendings'
        }
      },
      labels: [balanceLabel],
      datasets: balanceData
    }
    return (
      <Bar
        data = {barData}/>
    );
  }
}
