import React from 'react'
import ContactForm from './ContactForm';
import MultipleFieldsForm from './MultipleFieldsForm';
import {Grid, Row, Col} from 'react-bootstrap';

export default class ContactFormPage extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <ContactForm history={this.props.history}/>
            <br />
            <MultipleFieldsForm />
          </Col>
        </Row>
      </Grid>
    )
  }
}