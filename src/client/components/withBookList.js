import RenderWhileLoading from './RenderWhileLoading';
import { compose } from 'react-apollo';
import withBooks from '../queries/withBooks';


const withBookList = compose(
  withBooks,
  RenderWhileLoading("bookInfo"),
)

export default withBookList;

