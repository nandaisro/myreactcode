import React from 'react';
import ReactDOM from 'react-dom';
import AppTest, { useDate } from './AppTest';

import reportWebVitals from './reportWebVitals';
import './mainscreen.css'
import Login from './login'
import Dashboard from './Dashboard';
import About from './About'
import { BrowserRouter , Route } from 'react-router-dom';
import home from "./home";
import offile from './offline' ;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppTest />
    <Login />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<html>
<div class="wrapper">
  <h1>Static Layout Example</h1>
  <header>HEADER</header>
  <nav>NAV</nav>
  <section>SECTION</section>
</div>
</html>