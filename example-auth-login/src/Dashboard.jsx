import React, { Component } from "react";
import {   Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
import { Navigate } from "react-router-dom";



 class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Navigate to="/Login" replace={true} /> ;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>Dashboard</Link>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
              <Route path={`${match.path}/master`}>
              </Route>
              <Route path={`${match.path}/pos`}>
              </Route>
              <Route exact path={`${match.path}`}>

              </Route>
              <Route path="*">
              </Route>
          </div>
        </main>
      </div>
    );
  }
}
 
export default Dashboard;