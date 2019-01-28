import {gql} from 'apollo-boost';

const getCarNumsQuery = gql`
{
  carNums{
    id
    name
  }
}
`;

export {
  getCarNumsQuery
};