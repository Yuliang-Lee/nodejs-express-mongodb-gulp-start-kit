var express = require('express');
var log4js = require('helper/logger').log4js;
var router = express.Router();

var log = log4js.getLogger();

router.get('/', function(req, res, next) {
  res.render('index', { processid: process.pid });
  log.info('进入首页');

});

/* GET hive page. */
//router.get('/hive', function(req, res, next) {
//  res.render('queries/hive', { title: 'hive 查询' });
//});

module.exports = router;
