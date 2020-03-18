import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import {Types} from 'mongoose';
import pantryType from '../../Types/pantry';
import getProjection from '../../projections';
import PantryItem from '../../../models/pantryItem';

export default {
    type: pantryType,
    args: {
        id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return PantryItem
        .findById(params.id)
        .select(projection)
        .exec();
    }
};