var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //
  res.render('queries/hive', { title: "hive 查询页面"});
});

module.exports = router;
