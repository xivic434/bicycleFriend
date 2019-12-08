var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('myinfo', { title: 'myinfo' });
});

module.exports = router;
