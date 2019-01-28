// import React from 'react';
// import { compose, withHandlers } from 'recompose';
// import { graphql } from 'react-apollo';
// import { deleteBookMutation, getBooksQuery } from '../queries/Book';

// const DeleteBookBtn = (props)=> {
//   console.log("DeleteBookBtn", props);
//   return (
//     <button onClick={()=>props.deleteBook(props.bookId)}>delete</button>      
//   );
// }

// export default compose(
//   graphql(deleteBookMutation),
//   graphql(getBooksQuery, { name: "getBooksQuery" }),
//   withHandlers({
//     deleteBook: (props)=>(bookId)=>{
//       //alert('Delete book!' + bookId);
//       props.mutate({
//         variables: {id: bookId }
//       }).then(()=>{
//         props.getBooksQuery.refetch();
//       })      
//     }
//   })
// )(DeleteBookBtn)
