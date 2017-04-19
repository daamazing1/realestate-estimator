import React, {Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class PropertyInformation extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <form>
                <FormGroup controlId="typeOfProperty">
                    <ControlLabel>Type of Property</ControlLabel>
                    <FormControl type="text" value={this.props.typeOfProperty} placeholder="Multi-family" disabled={!this.props.editable} />
                </FormGroup>
                <FormGroup controlId="sizeOfProperty">
                    <ControlLabel>Size of Property</ControlLabel>
                    <FormControl type="text" value={this.props.sizeOfProperty} placeholder="2000 sq/ft" disabled={!this.props.editable} />
                </FormGroup>
            </form>                    
        );
    }
}

export default PropertyInformation;