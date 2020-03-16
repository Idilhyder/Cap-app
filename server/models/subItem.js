const mongoose = require('mongoose')
const mongooseApiQuery = require("mongoose-api-query");
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
SubItemSchema.indexes({'$**': 'text'});
SubItemSchema.plugin(mongooseApiQuery);
const SubItem= mongoose.model('SubItem', SubItemSchema);

module.exports = SubItem;



