import React, { PureComponent } from 'react';
import {Bar} from 'react-chartjs-2';

export default class BalanceBar extends PureComponent {

  render() {
    const balanceLabel = `${this.props.period.year}-${this.props.period.month}`
    const balanceData = [
      {
        label:" Budget",
        data: [this.props.budget],
        backgroundColor:[ 'rgba(241,85,45, 1)'],
        borderColor:[ 'rgb(0,99,132)'],
        hoverBackgroundColor: 'rgba(241,85,45, 0.5)'
      },
      {
        label:"Total spending",
        backgroundColor: 'rgba(56,161,74,1)',
        data:[this.props.spendings],
        borderColor:[ 'rgb(0,99,132)' ],
        hoverBackgroundColor: 'rgba(56,161,74,0.5)'
      }
    ]

    const barOptions = {
        tooltip:'index',
        legend: {
          position: 'bottom'
        }
      }

    const barData = {
      labels: [balanceLabel],
      datasets: balanceData
    }
    return (
      <Bar
        data = {barData} options={barOptions}/>
    );
  }
}
