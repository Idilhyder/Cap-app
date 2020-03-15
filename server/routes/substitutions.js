const express = require("express");
const router = express.Router();

const SubItem = require('../models/subItem.js')



router.get('/', (req, res) => {
    SubItem.find({})
        .then((subData) => {
            console.log('Data:', subData);
            res.json({subData});
        })
        .catch ((error) => {
            console.log('error:', error)
        });
})
router.get('/search/:query', (req, res) => {
    const query = req.params.query;
    SubItem.apiQuery(req.query).find({
        $text: { 
            $search: query
        }
    }).limit(5)
    .then(recipeFound => {
        return res.status(200).json(recipeFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})

// GET ONE ITEM
router.get('/:id', (req, res) => {
    SubItem.findById(req.params.id)
    .then(substitutionFound => {
        return res.status(200).json(substitutionFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})




module.exports = router;