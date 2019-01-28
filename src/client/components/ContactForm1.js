import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery } from '../queries/Author';
import { getCarNumsQuery } from '../queries/CarNum';
import RenderWhileLoading from './RenderWhileLoading';
import cx from 'classnames';


const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={cx('form-group', {'has-error': touched && error})}>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} type={type} className="form-control" />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


class ContactForm extends Component{
  render(){
    const { handleSubmit } = this.props;
    console.log(this.props);

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={renderField} type="text" label="First Name" />
        </div>
        <div>
          <Field name="lastName" component={renderField} type="text" label="Last Name" />
        </div>
        <div>
          <Field name="email" component={renderField} type="email" label="Email" />
        </div>  
        <div className="form-group">
          <label htmlFor="authorId">Author</label>
          <Field name="authorId" component="select" className="form-control">
            <option>Select author</option>
            {this.props.getAuthorsQuery.authors.map(author =>
              <option key={author.id} value={author.id}>{author.name}</option>
              )}                        
          </Field>
        </div>      
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    )
  }
}


export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  RenderWhileLoading("getAuthorsQuery"),
  reduxForm({
    form: 'contact',
    validate,
    destroyOnUnmount: false
  })  
)(ContactForm)


