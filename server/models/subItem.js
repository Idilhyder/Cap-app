const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const SubItemSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    substitutions: {
        type: String,
        required: true
      },
    })

const SubItem= mongoose.model('SubItem', SubItemSchema);

module.exports = SubItem;



