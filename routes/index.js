var express = require("express");
const router = express.Router()

router.get('/', (request, response) => {
  response.sendFile('index.html')
})


module.exports = router