var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function(req, res, next) {
  console.log('First Name: ' + req.body.firstname);
  console.log('Last Name: ' + req.body.lastname);
  res.send('POST received!');
});

module.exports = router;
