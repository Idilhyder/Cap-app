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
    .limit(1)
    .then(recipeFound => {
        return res.status(200).json(recipeFound)
    })
    .catch ((error) => {
        console.log('error:', error)
    });
})

// SEARCH MULTIPLE KEYWORDS
// router.get('/search/meal', function(req, res){
//     const query = RecipeItem.apiQuery(req.params.body);
//     // RecipeItem.aggregate(
//     //     [
//     //       { $match: { $text: { $search: query } } },
//     //       { $sort: { score: { $meta: "textScore" } } },
//     //       { $project: { ingredients: 1, _id: 0 } },
//     //       { $unwind : "$ingredients" }
//     //     ]
//     //  )
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

// router.get('/search/meal?', function(req, res) {
//     const urlParts = url.parse(req.url, true);
//     const { query } = urlParts;
//     // Check if URL query has & char and split into multiple query strings
//     const multiQuery = async () => {
//       // Return array of any query param values containing '&'
//       const mQueryArr = Object.values(query).filter(i => i.indexOf('&') > -1);
//       if (mQueryArr.length) {
//         Object.keys(query).forEach((key) => {
//           if (query[key].indexOf('&') > -1) {
//             // Split strings containing '&' and set query to search multiple using
//             // mongooses '$in' operator
//             const queries = query[key].split('&');
//             query[key] = { $in: queries };
//           }
//         });
//       }
//     };
//     multiQuery();
//     RecipeItem.find(query)
//       .exec((err, recipeData) => {
//         if (err) {
//           return next(err);
//         }
//         return res.json({ recipeData });
//       });
//   })
// app.get('/ebook?search=',function(req,res){
//     var search_key = req.param('search');
//         Ebook.find({title: search_key})
//            .then(ebooks => res.json(ebooks))
//            .catch(err => res.status(404).json({ success: false }));
//         });



// router.get('/select-meal/', (req, res) => {
//     const query = RecipeItem.apiQuery(req.query)
//     .find({
//         "$text": {
//             "$search": req.params.body
//         }
//     })
//     .limit(5)
//     .then(recipeFound => {
//         return res.status(200).json(recipeFound)
//     })
//     .catch ((error) => {
//         console.log('error:', error)
//     });
// })

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



