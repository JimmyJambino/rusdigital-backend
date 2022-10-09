var express = require('express');
var router = express.Router();
var schema = require('../database/createSchema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello, world!")
});

router.get('/all', async function(req, res, next) {
  var result = await schema.readAll()
  res.send(result)
})

router.post('create', function(req, res, next) {
  schema.createAccount(req.body.name)
  res.send("Creating account")
})

router.post('/reset', function(req, res, next) {
  schema.makeSchemas()
  res.send("Reset Database")
})

module.exports = router;
