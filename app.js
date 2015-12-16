const express = require('express');
const path = require('path');
const fs = require("fs");
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const helmet = require('helmet');

const app = express();

const config = require('config/config-parser');
app.set('setting', config);

module.exports.app = app;
module.exports.config = config;

// config nunjucks
nunjucks.configure('views', {
  autoescape: true,
  watch: config.nunjucksConfig.watch,
  express: app
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('routes',__dirname + '/routes/');

// port
app.set('port', config.appConfig.port);

// logger
require('helper/logger').accessLog(app);

// DB
require('helper/mongodb');

// uncomment after placing your favicon in /static
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());// 用于增加生产环境安全性
app.use("/static", express.static(path.join(__dirname, 'static')));

// register router
require('helper/registerRouter')(app);

// error handlers
require('helper/errorHandler')(app);
