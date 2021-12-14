
import { Card, Button, CardTitle, CardText, Row, Col,CardBody,CardImg,Spinner,CardLink } from 'reactstrap';
import "../styles/Home.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Badge } from 'reactstrap';
import numeral from "numeral";
import logo from "../images/download.jpg";
import di from "../images/dropdown.png";
import { sortData } from "../util";
import { connect } from "react-redux";
import { firstdata, firstdatallCountries, update,news } from "../redux/Action/action1";
import noimage from "../images/No-Image-Available.png";
import { Link } from "react-router-dom";


import React, { Component } from 'react'


class Home extends Component {
  state = {
    isopen: false,
    toggle: false,
  }

  componentDidMount() {
    this.props.firstdata()
    this.props.firstdatallCountries()
    this.handleclick()
    this.props.news()
  }


  componentDidUpdate(prevProps, prevState) {

    if (prevProps.countrycode !== this.props.countrycode) {
      this.props.firstdatallCountries()

    }

  }

  handleclick = () => {
    console.log("e.target")
    this.setState({ isopen: false })
  }

  render() {
    return (
      <div >
        <Row className="main-row">

          <Col >

            <div >
              <div className="drop-down">
                <Row className="dropdown-row"> 
                  <Col sm="6">
                  <div style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}><img style={{ heigth: "60%", width: "60%" }} src="https://i.ibb.co/7QpKsCX/image.png" /> TRACKER </div>
                  </Col>
                  <Col>
                  <div>
                    <Dropdown isOpen={this.state.isopen} toggle={this.state.toggle}>
                      <DropdownToggle onClick={() => this.setState({ isopen: !this.state.isopen })}>
                        {this.props.countrycode}<img style={{ height: "10%", width: "10%" }} src={di} />
                      </DropdownToggle>
                      <DropdownMenu
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  overflow: 'auto',
                                  maxHeight: '400px',
                                },
                              };
                            },
                          },
                        }}
                      >
                        <DropdownItem value="worldwide" onClick={(e) => { this.props.update(e.target.value, logo); this.setState({ isopen: false }) }
                        }>worldwide</DropdownItem>
                        {this.props.dropdown.map(map => <DropdownItem value={map.country} onClick={(e) => { this.props.update(e.target.value, map.countryInfo.flag); this.setState({ isopen: false }) }
                        }>{map.country}</DropdownItem>)}

                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  </Col>
                </Row>
                <Row className="left-rows img-row">
                <div onClick={this.handleclick}><img style={{ height: "100%", width: "100%" }} src={this.props.flag} /></div>
                </Row>
              </div>
              
                
                <h4>  Total   <Badge color="danger">LIVE</Badge></h4>
              
              <div>
                <Row className="left-rows">
                  <Col sm="4" className="col-card">
                    <Card body inverse color="danger">
                      <CardTitle className="card-title">Confirmed</CardTitle>
                      <CardText className="card-text">{numeral(this.props.currentCountry.cases).format("0,0")}</CardText>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card body inverse color="success">
                      <CardTitle className="card-title">Recovered</CardTitle>
                      <CardText className="card-text">{numeral(this.props.currentCountry.recovered).format("0,0")}</CardText>

                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                      <CardTitle className="card-title">Deaths</CardTitle>
                      <CardText className="card-text">{numeral(this.props.currentCountry.deaths).format("0,0")}</CardText>

                    </Card>
                  </Col>
                </Row>

                <h4>Today <Badge color="danger">LIVE</Badge></h4>

                <Row>
                  <Col sm="4">
                    <Card body inverse color="danger">
                      <CardTitle className="card-title">Confirmed</CardTitle>
                      <CardText className="card-text">{numeral(this.props.currentCountry.todayCases).format("0,0")}</CardText>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card body inverse color="success">
                      <CardTitle className="card-title">Recovered</CardTitle>
                      <CardText className="card-text">{numeral(this.props.currentCountry.todayRecovered).format("0,0")}</CardText>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                      <CardTitle className="card-title">Deaths</CardTitle>
                      <CardText className="card-text">{numeral(this.props.currentCountry.todayDeaths).format("0,0")}</CardText>
                    </Card>
                  </Col>
                </Row>
                <Link to="/moreInfo"><Button className="button-moreinfo" color="info">More Information</Button>{' '}</Link>
              </div>
            </div>
          </Col>
          
          <Col sm="4" >
          <h4>{this.props.currentCountry.affectedCountries} Countries Affected</h4>
            <div style={{ overflow: "auto", height: "630px" }}>
              
              <Table striped >
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.currentallCountry.map(map => <tr>
                    <th scope="row"><span><img style={{ height: "30px", width: "35px" }} src={map.countryInfo.flag} /></span>{map.country}</th>
                    <td>{map.cases}</td>
                    <td>{map.recovered}</td>
                    <td>{map.deaths}</td>
                  </tr>)
                  }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <h3>Some News Upadate</h3>
         <Row>
           
           {this.props.newscovid===[]?<Spinner type="grow" color="success" />:(this.props.newscovid.map(map=><Col sm="4" >
           <Card className="news-col">
        <CardImg top width="100%" style={{width:"280px",height:"300px"}} src={map.urlToImage===null?noimage:map.urlToImage} alt="Card image cap" />
        <CardBody>
        <CardLink className="atag" href={map.url} target="_blank" >{map.title}</CardLink>
         
          
          
          
        </CardBody>
      </Card>
             </Col>))}
           </Row>    
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.countrydata.news)
  return {
    currentallCountry: state.countrydata.currentallCountry,
    dropdown: state.countrydata.dropdown,
    currentCountry: state.countrydata.currentCountry,
    countrycode: state.countrydata.countrycode,
    flag: state.countrydata.flag,
    newscovid:state.countrydata.news

  }
}

export default connect(mapStateToProps, { firstdata, firstdatallCountries, update,news })(Home);

