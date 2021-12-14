
import logo from "../images/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
import "../App.css"
import {logOut}  from "../redux/Action/authaction";
import {connect} from "react-redux";
import "../styles/navi.css"; 
import React, { Component } from 'react'

 class Navigator extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg navbar-dark bg-dark" >
    <Link to={"/"}><img src={logo} alt="logo" style={{width:"30px",height:"30px",margin:"0.5%"}} /></Link>
    <Link to={"/"}>Corona Tracker</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto ">
        <Nav.Item>
          <Nav.Link  ><Link to={"/"}>Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/covid"}>What is COVID-19</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/selfassess"}>Self Assess</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/About"}>About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/profile"}>Profile</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
           
           {this.props.isauth?
            <div onClick={()=>this.props.logOut()}>LogOut</div>: <Link to={"/login"}>LogIn</Link>}
            </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{

return{
  isauth:state.users.isAuthenticated
}
}

export default connect(mapStateToProps,{logOut})(Navigator);