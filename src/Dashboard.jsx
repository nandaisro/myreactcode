import React, {Container ,Nav ,Navbar, Component } from "react";
import { Link ,Navigate ,IndexRoute ,useNavigate} from "react-router-dom";
import Login  from "./login";
import ReactDOM from 'react-dom';
import AppTest, { useDate } from './AppTest';
import { BrowserRouter  , Routes } from 'react-router-dom';
import "./Dashboard.css";
import "./menu.css"
import About from "./About";
import offline from "./offline";
import Home from "./home";
import './App.css';
import logo from './logo.svg';
import { Router, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false ,
      isAbout :false,
       date: new Date()};
    
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
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  ClickAbout = () => {

    localStorage.removeItem("token");
    this.setState({
      isAbout: true
    });
    
  
  };

  render() {
    if (this.state.islogout) {
      return <Login />;
    }
    if (this.state.isAbout) {
   //   return <Routes><Route path="/About" component={About} /> </Routes> ;
    }
    const { match } = this.props;
    const rootElement = document.getElementById("root");

        return(
          
          <body>

          <div class="navbar">
          <Link to="/" class="active"> Home </Link>
          <Link to={"/offline"} onClick={this.offline}> Offline </Link>
          <Link to={"/About"} onClick={this.ClickAbout}> About </Link>
          <Link to={"/Login"} onClick={this.signOut}> SignOut </Link>
          
        </div>
        <hr />
          <div>  
            <Routes>
          <Route path="/home" element={<Home/ >}/> 
          <Route path="/About" element={<About/ > }/> 
          <Route path="/offline" element={<offline/ >} /> 
        </Routes>

          </div>  

        </body>
    
   
      );
        
}
    
}

ReactDOM.render(Dashboard, document.getElementById('root'));  

