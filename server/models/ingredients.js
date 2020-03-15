const mongoose = require('mongoose')
const mongooseApiQuery = require("mongoose-api-query");
const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
  _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
      },
})
IngredientsSchema.indexes({'$**': 'text'});
IngredientsSchema.plugin(mongooseApiQuery);
const Ingredients= mongoose.model('Ingredients', IngredientsSchema);

module.exports = Ingredients;