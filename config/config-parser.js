/**
 * 项目配置解析
 */

const log4js = require('helper/logger').log4js;
const env = process.env.NODE_ENV;
const log = log4js.getLogger();
var settings;

switch (env) {
  case 'production':
    settings = require(process.env.REC_CONFIG);
    break;
  case 'development':
    settings = require('./config');
    break;
  case 'test':
    settings = require(process.env.REC_CONFIG);
    break;
  default:
    settings = {};
    log.error('读取配置文件出错,请确认配置NODE_ENV环境变量为正确的值');
    throw Error('读取配置文件出错,请确认配置NODE_ENV环境变量为正确的值');
}

module.exports = settings;
