const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

const pantryRouter = require('./routes/pantry');
const substitutionsRouter = require('./routes/substitutions');
const recipeRouter = require('./routes/recipe')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(morgan('tiny'));

app.use('/pantry', pantryRouter);
app.use('/substitution', substitutionsRouter);
app.use('/recipe', recipeRouter);




app.listen(PORT, console.log(`SERVER RUNNING ON ${PORT}`));

