const express = require("express");
const router = express.Router();
const _ = require('lodash');
const RecipeItem = require(`../models/recipeItem`);


// GET ALL RECIPES
router.get('/', (req, res) => {
    RecipeItem.find({}).limit(15)
        .then((recipeData) => {
            console.log('Data:', recipeData);
            res.json({recipeData});
        })
        .catch ((error) => {
            console.log('error:', error)
        });
})

// SEARCH ALL RECIPES WITH ONE KEY WORD
router.get('/search/:query', (req, res) => { 
    const query = RecipeItem.apiQuery(req.query)
    .find({
        "$text": {
            "$search": req.params.query
        }
    })
    .limit(10)
    .then(recipeFound => {
        return res.status(200).json(recipeFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})
router.get('/roulette/:query', (req, res) => { 
    const query = RecipeItem.apiQuery(req.query)
    .find({
        "$text": {
            "$search": req.params.query
        }
    })
    .limit(1)
    .then(recipeFound => {
        return res.status(200).json(recipeFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})

// // SEARCH MULTIPLE KEYWORDS
// router.get('/search/meal/:body', function(req, res){
//     const query = RecipeItem.apiQuery(req.params.body);
//     RecipeItem.aggregate(
//         [
//           { $match: { $text: { $search: query } } },
//           { $sort: { score: { $meta: "textScore" } } },
//           { $project: { ingredients: 1, _id: 0 } },
//           { $unwind : "$ingredients" }
//         ]
//      )
//      RecipeItem.find({
//         "$text": {
//             "$search": query
//         }
//      })
//     .limit(5)
//     .then(recipeFound => {
//         return res.status(200).json(recipeFound)
//     })
//     .catch ((error) => {
//         console.log('error:', error)
//     });
// });


// GET ONE RECIPE
router.get('/:id', (req, res) => {
    RecipeItem.findById(req.params.id)
   .then(recipeFound => {
       return res.status(200).json(recipeFound)
   })
   .catch ((error) => {
       console.log('error:', error)
   });
})





module.exports = router;



