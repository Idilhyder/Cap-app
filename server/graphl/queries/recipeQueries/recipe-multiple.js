import { GraphQLList } from 'graphql';

import recipeType from '../../Types/recipe';
import getProjection from '../../projections';
import RecipeItem from '../../../models/recipeItem';

export default {
    type: new GraphQLList(recipeType),
    args: {},
    resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return RecipeItem
        .find()
        .select(projection)
        .exec();
    }
};
