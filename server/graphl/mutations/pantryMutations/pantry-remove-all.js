import { GraphQLBoolean } from 'graphql';
import PantryItem from './../../../models/pantryItem';

export default {
type: GraphQLBoolean,
resolve (root, params, options) {
return PantryItem
    .remove({})
    .exec();
}
};