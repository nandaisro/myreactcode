import React from "react";
//import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  
  Route
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Router>
        <Route path="/Login">
          <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Navigate to="/Dashboard" replace={true} />
        </Route>
        <Route path="*">
          <Navigate from="/" to="dashboard" />
        </Route>
    </Router>
  );
}



