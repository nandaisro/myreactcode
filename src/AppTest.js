import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { Route, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
export default class AppTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }
  
render() {
    const style = {
    'textAlign': 'center',
    'color': 'green'
    }
    const datestyle={
        'textAlign' :'right' ,
        'color' : '#161F6D'
    }
  
    // Return JSX code
    return (
        <body>
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Monitoring and Control System</h1>
        <h3 className="blinktime" >&emsp; &emsp;&emsp;&emsp;{this.state.date.toLocaleString()}.</h3>
    </div>


          </body>
      
      
    );
}
}
