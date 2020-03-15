const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const SubItemSchema = new Schema({
    _id: Schema.Types.ObjectId,
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



