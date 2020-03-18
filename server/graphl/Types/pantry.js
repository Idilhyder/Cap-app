
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const PantryType = new GraphQLObjectType({
    name: 'pantry',
    fields: {
    _id: {
    type: new GraphQLNonNull(GraphQLID)
    },
    name: {
    type: GraphQLString
    },
}
});