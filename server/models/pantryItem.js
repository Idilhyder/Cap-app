const mongoose = require('mongoose')
const mongooseApiQuery = require("mongoose-api-query");
const Schema = mongoose.Schema;

const PantryItemSchema = new Schema({
  _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
      },
})
PantryItemSchema.indexes({'$**': 'text'});
PantryItemSchema.plugin(mongooseApiQuery);
const PantryItem= mongoose.model('PantryItem', PantryItemSchema);

module.exports = PantryItem;