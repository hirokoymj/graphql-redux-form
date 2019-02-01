import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import validateContactForm from './validateContactForm';
import withSubmit from './withSubmit';
import withBookList from './withBookList';
import withAuthorList from './withAuthorList';
import { compose, withHandlers, withProps } from 'recompose';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';


const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <input {...fields.firstName.input} type="text"/>
      {fields.firstName.meta.touched && fields.firstName.meta.error && 
       <span className="error">{fields.firstName.meta.error}</span>}
    </div>
    <div className="input-row">
      <input {...fields.lastName.input} type="text"/>
      {fields.lastName.meta.touched && fields.lastName.meta.error && 
       <span className="error">{fields.lastName.meta.error}</span>}
    </div>
  </div>
)


let MultipleFieldsForm = props => {
  console.log("MultipleFieldsForm", props);
  const { handleSubmit, pristine, reset, mySubmit, bookInfo, authorInfo  } = props
  return (
    <form onSubmit={handleSubmit}>
      <Fields names={[ 'firstName', 'lastName' ]} component={renderFields}/>
    </form>
  )
}

export default compose(
  reduxForm({
    form: 'multiForm',
    validate: validateContactForm,
    destroyOnUnmount: false
  }),
)(MultipleFieldsForm);

 