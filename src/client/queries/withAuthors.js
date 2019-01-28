import { graphql } from "react-apollo";
import gql from "graphql-tag";


export default graphql(
  gql`
    query{
      authors {
        name
        id
      }
    }
  `,
  {
    props: ({ data }) => {
      return {
        authorInfo: {
          loading: data.loading,
          data: data ? data.authors : []
        }
      };
    }
  }
);
