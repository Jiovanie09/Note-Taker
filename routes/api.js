const path = require('path')
var express = require("express");
const router = express.Router()

// make a function that reads the db/db.json file
// |> convert the string read from it to a JS object
// |> have that method return the object

// make a function to write the modified data to db/db.json

router.get('/notes', (request, response) => {
  
  // perform a find on the data from db.json and return that in response.send()
})

router.post('/notes', (request, response) => {

  // add data from request.body to db.json
})

router.delete('/note', (request, response) => { 
  // perform a find on data in db.json
  // |> delete the record matching what was sent in request.body
  // |> rewrite the new ly modified data to db.json
})


module.exports = router;

// for working with files look into node's fs.readFileSync and fs.writeFileSync from the 'fs' module


