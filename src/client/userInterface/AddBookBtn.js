import React from 'react';
import { compose, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import { addBookMutation } from '../queries/Book';

const AddBookBtn = (props)=> {
  const { formData } = props;
  return (
    <button onClick={()=>props.addBook(formData)}>Add Book</button>      
  );
}

export default compose(
  graphql(addBookMutation),
  withHandlers({
    addBook: (props)=>( {name, genre, authorId} )=>{
      props.mutate({
        variables: {name, genre, authorId},
      }).then(()=>{ 
        props.history.push('/');
      });     
    }
  })
)(AddBookBtn)

