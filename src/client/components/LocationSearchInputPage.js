import React, { Component } from 'react';
//import LocationSearchInput2 from './LocationSearchInput2';
import AutoCompleteForm from './AutoCompleteForm';
import ContinueButton from './ContinueButton';
import {Grid, Row, Col} from 'react-bootstrap';

export default class LocationSearchInputPage extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Car Location View <small>AutoCompleteForm</small></h1>
            <AutoCompleteForm />
            <ContinueButton history={this.props.history} path={'/map'} />
          </Col>
        </Row>
      </Grid>
    )
  }
}


// <LocationSearchInput2 />
