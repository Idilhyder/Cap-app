const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PantryItemSchema = new Schema({
  _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
      },
})

const PantryItem= mongoose.model('PantryItem', PantryItemSchema);

module.exports = PantryItem;