const mongoose = require('mongoose')
const mongooseApiQuery = require("mongoose-api-query");
require('mongoose-type-url');
const Schema = mongoose.Schema;


const RecipeItemSchema = new Schema({
   
    name: {
        type: String,
        required: true
      },
    image: {
      type: String,
      required: true
    },
    rating: {
        type: String,
        required: true
      },
    ingredients: {
      type:Array, 
      default: []
    },
    directions:{
        type: String,
        required: true
      },
    prep: {
        type: String,
        required: true
      },
    cook: {
        type: String,
        required: true
      },
    readyIn: {
        type: String,
        required: true
      },
    calories: {
        type: String,
        required: true
      },
    });

// const recipeData = {
//     name: 'garlic',
//     image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F08%2F4540812-Unstuffed-Cabbage-Rolls-Photo-by-MyHotSouthernMess-resize.png',
//     rating: '5',
//     ingredients: 'none',
//     directions:'try',
//     prep: '0',
//     cook: 'yes',
//     readyIn: 'no',
//     calories:'a million',
// }

RecipeItemSchema.indexes({'$**': 'text'});
RecipeItemSchema.plugin(mongooseApiQuery);
const RecipeItem= mongoose.model('RecipeItem', RecipeItemSchema);
// const newRecipeItem = new RecipeItem(recipeData);

// newRecipeItem.save((error) => {
//     if (error) {
//         console.log('Oops, something happened');
//     } else {
//         console.log('Data saved');
//     }
// });

module.exports = RecipeItem;