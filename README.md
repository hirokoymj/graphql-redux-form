# Redux-Form Sample - master by HY 123

**ContactForm.js**

```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validateContactForm from './validateContactForm';
import withSubmit from './withSubmit';
import withBookList from './withBookList';
import withAuthorList from './withAuthorList';
import { compose } from 'recompose';
import cx from 'classnames';
import { Link } from 'react-router-dom';


const inputTextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className={cx('form-group', {'has-error': touched && error})}>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);


const bookDropdownField = (field) => {
  console.log("field", field);
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <select {...field.input} className="form-control">
        <option value="">Select book</option>
        {field.options.map(book => 
          <option key={book.id} value={book.id}>{book.name}</option>        
          )
        }
      </select>
      {field.meta.touched && field.meta.error &&
      <span className="error">{field.meta.error}</span>}
  </div>
  )
}

const authorDropdownField = (field) => {
  console.log("field", field);
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <select {...field.input} className="form-control">
        <option value="">Select author</option>
        {field.options.map(author => 
          <option key={author.id} value={author.id}>{author.name}</option>        
          )
        }
      </select>
      {field.meta.touched && field.meta.error &&
      <span className="error">{field.meta.error}</span>}
  </div>
  )
}


let ContactForm = props => {
  console.log("ContactForm", props);
  const { handleSubmit, pristine, reset, mySubmit, bookInfo, authorInfo } = props
  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <Field
        name="firstName"
        component={inputTextField}
        type="text"
        placeholder="First Name"
        label="First Name"
      />
      <Field 
        name="bookId"
        component={bookDropdownField}
        label="My Book List"
        options={bookInfo.data}
      />
      <Field 
        name="authorId"
        component={authorDropdownField}
        label="Author List"
        options={authorInfo.data}
      />      
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={reset}>Clear Values</button>
        <Link to="/result">review</Link>
      </div>
    </form>
  )
}

export default compose(
  reduxForm({
    form: 'contactForm',
    validate: validateContactForm,
    initialValues: { firstName: "Hiroko" },
    destroyOnUnmount: false
  }),
  withBookList,
  withAuthorList,
  withSubmit
)(ContactForm);
```


### References:

- [Redux-Form](https://redux-form.com/8.1.0/)
- [Recompose - Github](https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops)
- [Recompose - Doc](https://recompose.docsforhumans.com/api/withprops.html)
