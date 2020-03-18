import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import {Types} from 'mongoose';
import recipeType from '../../Types/recipe';
import getProjection from '../../projections';
import RecipeItem from '../../../models/recipeItem';

export default {
    type: recipeType,
    args: {
        id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return RecipeItem
        .findById(params.id)
        .select(projection)
        .exec();
    }
};