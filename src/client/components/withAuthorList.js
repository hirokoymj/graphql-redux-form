// import { withProps } from 'recompose';
// import { getBooksQuery } from '../queries/Book';
import RenderWhileLoading from './RenderWhileLoading';
//import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import withAuthors from '../queries/withAuthors';


const withAuthorList = compose(
  withAuthors,
  RenderWhileLoading("authorInfo"),
)

export default withAuthorList;

