const express = require("express");
const router = express.Router();

const RecipeItem = require('../models/recipeItem');


// GET ALL RECIPES
router.get('/', (req, res) => {
    RecipeItem.find({})
        .then((recipeData) => {
            console.log('Data:', recipeData);
            res.json({recipeData});
        })
        .catch ((error) => {
            console.log('error:', error)
        });
})

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

router.get('/name', (req, res) => {
    RecipeItem.findById(req.params.name)
   .then(recipeFound => {
       return res.status(200).json(recipeFound)
   })
   .catch ((error) => {
       console.log('error:', error)
   });
})



module.exports = router;