import React from "react";
import logo from "../images/muna.jpg";
import pra from "../images/prashant.jpg"
import "../styles/about.css"
import {Row,Col} from "reactstrap"

const About = () => {
  return (
    <div className="bg-light mt-3">
      <h5>About Corona Tracker</h5>
      <p className="text-left p-5">
        <li>
        https://corona-tracker2.herokuapp.com/ is a small project powered by 2 members
          
        </li>
        <br />
        <li>
          It acts as a portal for the public to keep track of the latest news
          development about the COVID-19, alongside collecting data for further
          analysis. 
          
        </li>
        <br />
        <li>
          Works started on the 5th of August. Our team has been working relentlessly to make this a success,
          and deployed  on the 19th of January.
        </li>
        <br />
        <li>
          We aim to use technology and make information more accessible
        </li>
      </p>
      <h3 className="">Project Partners-</h3>
      
      <div className="about">
      <Row>
        <Col sm="6">
        <div className="about-pic">
      <img src={pra} alt="logo" width="130px" height="130px"  style={{borderRadius:"50%"}}/>
      <h4>Prashant Shekhawat</h4>
      </div>
      </Col>
      <Col sm="6">
      <div className="about-pic">
      <img src={logo} alt="logo" width="130px" height="130px"  style={{borderRadius:"50%"}}/>
      <h4>Manmohan Sahoo</h4>
      </div>
      </Col>
      </Row>
      </div>
     
    </div>
  );
};

export default About;
