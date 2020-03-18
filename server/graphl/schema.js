const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Recipe {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
}
type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);

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

// const PantryType = new GraphQLObjectType({
//     name: 'pantry',
//     fields: {
//     _id: {
//     type: new GraphQLNonNull(GraphQLID)
//     },
//     name: {
//     type: GraphQLString
//     },
// }
// });
const queryType = new GraphQLObjectType({
name: 'Query',
fields: function () {
    return {
    recipes: {
        type: new GraphQLList(RecipeType),
        resolve: function () {
        const books = RecipeItem.find().exec()
        if (!recipes) {
            throw new Error('Error')
        }
        return recipes
        }
    },
    recipe: {
        type: RecipeType,
        args: {
        id: {
            name: '_id',
            type: GraphQLString
            },
        // ingredients: {
        //     name: 'ingredients',
        //     type: GraphQLString
        // }
        },
        resolve: function (root, params) {
        const recipeDetails = RecipeItem.findById(params.id).exec()
        if (!recipeDetails) {
            throw new Error('Error')
        }
        return recipeDetails
        }
    }
    }
}
});






module.exports = new GraphQLSchema({query: queryType});