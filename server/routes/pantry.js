const express = require("express");
const router = express.Router();

const PantryItem = require('../models/pantryItem');

// GET ALL PANTRY
router.get('/', (req, res) => {
    PantryItem.find({})
        .then((pantryData) => {
            console.log('Data:', pantryData);
            res.json({pantryData});
        })
        .catch ((error) => {
            console.log('error:', error)
        });
})

// GET ONE PANTRY ITEM
router.get('/:id', (req, res) => {
    PantryItem.findById(req.params.id)
    .then(pantryFound => {
        return res.status(200).json(pantryFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})


// CREATE ONE PANTRY ITEM
router.post('/', (req, res) => {
    const pantryData = req.body;
    
    const newPantryItem = new PantryItem(pantryData);

    newPantryItem.save((error)=> {
            if (error) {
            res.status(500).json('Sorry, server error');
            return;
            }     
            return res.json({
                message: 'item logged in your pantry'
            });
    });
    
});

// UPDATE ONE PANTRY ITEM
router.patch('/:id', (req, res) => {
})

// DELETE ONE PANTRY ITEM
router.delete('/:id', (req, res) => {
    
})





module.exports = router;
