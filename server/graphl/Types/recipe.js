
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

const RecipeType = new GraphQLObjectType({
    name: 'recipe',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
        name: {
            type: GraphQLString
        },
        ingredients: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        rating: {
            type: GraphQLString
        
        },
        directions:{
            type: GraphQLString
            
        },
        prep: {
            type: GraphQLString
        
        },
        cook: {
            type: GraphQLString
        
        },
        readyIn: {
            type: GraphQLString
    
        },
        calories: {
            type: GraphQLString
        
        },
    }
    
});


