
import { GraphQLNonNull,GraphQLID } from 'graphql';

import pantryType from '../../Types/pantry';
import getProjection from '../../projections';
import PantryItem from './../../../models/pantryItem';

export default {
type: pantryType,
args: {
    _id: {
    name: '_id',
    type: new GraphQLNonNull(GraphQLID)
    }
},
async resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
    const removedPantryItem = await PantryItem
    .findByIdAndRemove(params._id, {
        select: projection
    })
    .exec();

    if (!removedPantryItem) {
    throw new Error('Error removing pantry item');
    }

    return removedPantryItem;
}
};