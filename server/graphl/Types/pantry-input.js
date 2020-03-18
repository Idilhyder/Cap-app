import {GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PantryInput',
  fields: {
    _id: {type: GraphQLID},
    name: {type: GraphQLString},
  }
});