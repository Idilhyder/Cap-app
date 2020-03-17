const express = require("express");
const router = express.Router();

const RecipeItem = require(`../models/recipeItem`);


// GET ALL RECIPES
router.get('/', (req, res) => {
    RecipeItem.find({}).limit(5)
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
    .limit(5)
    .then(recipeFound => {
        return res.status(200).json(recipeFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})

// SEARCH MULTIPLE KEYWORDS
router.get('/select-meal/', (req, res) => {
    const query = RecipeItem.apiQuery(req.query)
    .find({
        "$text": {
            "$search": req.params.body
        }
    })
    .limit(5)
    .then(recipeFound => {
        return res.status(200).json(recipeFound)
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





module.exports = router;



