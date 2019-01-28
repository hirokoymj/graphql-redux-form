import { graphql } from "react-apollo";
import gql from "graphql-tag";

export default graphql(
  gql`
    query{
      books{
        id
        name
        genre
      }
    }
  `,
  {
    props: ({ data }) => {
      return {
        bookInfo: {
          loading: data.loading,
          data: data ? data.books : []
        }
      };
    }
  }
);

