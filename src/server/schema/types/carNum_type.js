const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;
const CarNum = require('../../models/carNum');


const CarNumType = new GraphQLObjectType({
  name: 'CarNum',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString}
  })
});

module.exports = CarNumType;
