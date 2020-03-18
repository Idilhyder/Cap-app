const mongoose = require('mongoose')
const mongooseApiQuery = require("mongoose-api-query");
require('mongoose-type-url');
const Schema = mongoose.Schema;


const MealsSchema = new Schema({
    pantry: {
    type: Schema.Types.ObjectId,
    ref: 'pantry'
    },
    recipe: {
    type: Schema.Types.ObjectId,
    ref: 'recipe'
    }
    });



MealsSchema.indexes({'$**': 'text'});
MealsSchema.plugin(mongooseApiQuery);
const Meals= mongoose.model('Meals', MealsSchema);


module.exports = Meals;