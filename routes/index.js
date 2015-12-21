var express = require('express');
var log4js = require('helper/logger').log4js;
var router = express.Router();

var log = log4js.getLogger();

router.get('/', function(req, res, next) {
  res.render('index', { processid: process.pid });
  log.info('进入首页');

});


module.exports = router;
