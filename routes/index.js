var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.NODE_ENV);
  var title;
  if( process.env.NODE_ENV === 'production')
    title = 'dev';
  else
    title = 'pro';
  res.render('index', { title: title });
});

module.exports = router;                     