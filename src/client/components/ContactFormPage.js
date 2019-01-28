import React from 'react'
import ContactForm from './ContactForm';
import {Grid, Row, Col} from 'react-bootstrap';


export default class ContactFormPage extends React.Component {
  // submit = values => {
  //   // print the form values to the console
  //   console.log(values)
  // }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <ContactForm />
          </Col>
        </Row>
      </Grid>
    )
  }
}