
import { GraphQLNonNull, GraphQLBoolean } from 'graphql';

import pantryInputType from './../../Types/pantry-input';
import PantryItem from './../../../models/pantryItem';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(pantryInputType)
    }
  },
  async resolve (root, params, options) {
    const PantryItem = new PantryItem(params.data);
    const newPantryItem = await PantryItem.save();

    if (!newPantryItem) {
      throw new Error('Error adding new item');
    }
    return true;
  }
};