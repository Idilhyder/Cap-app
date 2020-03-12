const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PantryItemSchema = new Schema({
    name: {
        type: String,
        required: true
      },
})

const PantryItem= mongoose.model('PantryItem', PantryItemSchema);

module.exports = PantryItem;