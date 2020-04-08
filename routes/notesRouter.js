const path = require('path')
var express = require("express");
const router = express.Router()

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;