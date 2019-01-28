import { compose, lifecycle, withHandlers, withProps } from 'recompose';

const submit = (values)=>{
  console.log('submit')
  console.log("values", values);
  const { firstName } = values;
  console.log("firstName: ", firstName);
  const data = {
    firstName
  }
  //Save database
  //axios('http://www.example.com', data);
}

const withSubmit = withHandlers({
  mySubmit: (props) => (values)=>{
    submit(values);
  }
});

export default withSubmit;
