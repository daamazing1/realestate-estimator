import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Address from './components/Address';
import PropertyInformation from './components/PropertyInformation';
import CostInformation from './components/CostInformation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Address />
            <PropertyInformation />
          </Col>
          <Col md={6}>
            <CostInformation buildingCost={100000} landCost={30000} percentDown={25}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
