import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Clearfix } from 'react-bootstrap';

class CostInformation extends Component{
    constructor(props){
        super(props);
        this.mortgage = (this.props.landCost + this.props.buildingCost) * (this.props.percentDown/100);
        this.initialInvestment = (this.props.landCost + this.props.buildingCost) - this.mortgage;
        console.log(props);
    }
    render(){
        return (
            <form>
                <FormGroup controlId="buildingCost">
                    <ControlLabel>Building Cost</ControlLabel>
                    <FormControl type="text" value={this.props.buildingCost} placeholder="100000" disabled={!this.props.editable} />
                </FormGroup>
                <FormGroup controlId="landCost">
                    <ControlLabel>Land Cost</ControlLabel>
                    <FormControl type="text" value={this.props.landCost} placeholder="30000" disabled={!this.props.editable} />
                </FormGroup>
                <FormGroup controlId="costBasis">
                    <ControlLabel>Cost Basis</ControlLabel>
                    <FormControl type="text" value={this.props.landCost + this.props.buildingCost} disabled="true" />
                </FormGroup>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <FormGroup controlId="mortgage">
                                <ControlLabel>Less Mortgages</ControlLabel>
                                <FormControl type="text" value={this.mortgage} disabled="true" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="percentDown">
                                <ControlLabel>Percent Down</ControlLabel>
                                <FormControl type="text" value={this.props.percentDown} placeholder="25" disabled={!this.props.editable} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
                <FormGroup controlId="initialInvestment">
                    <ControlLabel>Initial Investment</ControlLabel>
                    <FormControl type="text" value={this.initialInvestment} disabled="true" />
                </FormGroup>
                <FormGroup controlId="amortizationPeriod">
                    <ControlLabel>Amortization Period</ControlLabel>
                    <FormControl type="text" value={this.props.amortizationPeriod} placeholder="27.5" disabled={!this.props.editable} />
                </FormGroup>
            </form>
        );
    }
}

export default CostInformation;