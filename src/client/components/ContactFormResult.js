import React from 'react'
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

let ContactFormResult = (props) =>{
  console.log("ContactFormResult: ", props);
  return (
    <div>
      <h2>Result from selector</h2>
      <p>firstName: {props.firstName}</p>
      <p>BookId: {props.bookId}</p>
      <p>AuthorId: {props.authorId}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  firstName: formValueSelector("contactForm")(state, "firstName"),
  bookId: formValueSelector("contactForm")(state, "bookId"),
  authorId: formValueSelector('contactForm')(state, "authorId")
})

// connected component 
ContactFormResult = connect(
  mapStateToProps
)(ContactFormResult)

export default ContactFormResult