import { GraphQLList } from 'graphql';

import pantryType from '../../Types/pantry';
import getProjection from '../../projections';
import PantryItem from '../../../models/pantryItem';

export default {
    type: new GraphQLList(pantryType),
    args: {},
    resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PantryItem
        .find()
        .select(projection)
        .exec();
    }
};