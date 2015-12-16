/**
 * 日志处理
 */

const log4js = require('log4js');
const config = require('config/config-parser');

log4js.configure(config.logConfig);

// 方便其他模块使用log输出内容,替换掉console.log
global.log = log4js.getLogger();

module.exports.log4js = log4js;
module.exports.accessLog = function(app){

  // production
  if('production' === app.get('env')){
    console.log('log env: production');

    var logger = log4js.getLogger('access-log');
    logger.setLevel("ERROR");
    app.use(log4js.connectLogger(logger, { level: 'auto'}));
  }

  // development
  if('development' === app.get('env')){
    console.log('log env: development');
    var logger = log4js.getLogger('http');

    app.use(log4js.connectLogger(logger, { level: 'auto', format: ':method :url :status ":response-time ms"'}));
  }

  // test
  if('test' === app.get('env')){
    console.log('env: test');

    var logger = log4js.getLogger('access-log');
    logger.setLevel("ERROR");
    app.use(log4js.connectLogger(logger, { level: 'auto'}));
  }
};
