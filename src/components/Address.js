import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Address extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <form>
                <FormGroup controlId="street">
                    <ControlLabel>Street</ControlLabel>
                    <FormControl type="text" value={this.props.street} placeholder="123 Main st." disabled={!this.props.editable} />
                </FormGroup>
                <FormGroup controlId="city">
                    <ControlLabel>City</ControlLabel>
                    <FormControl type="text" value={this.props.city} placeholder="Bethlehem" disabled={!this.props.editable}/>
                </FormGroup>
                <FormGroup controlId="state">
                    <ControlLabel>State</ControlLabel>
                    <FormControl type="text" value={this.props.state} placeholder="PA" disabled={!this.props.editable} />
                </FormGroup>
                <FormGroup controlId="zip">
                    <ControlLabel>Zip Code</ControlLabel>
                    <FormControl type="text" value={this.props.zip} placeholder="18043" disabled={!this.props.editable} />
                </FormGroup>
            </form>
        );
    }
}

export default Address;