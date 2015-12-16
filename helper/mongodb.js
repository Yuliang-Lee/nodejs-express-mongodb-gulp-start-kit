/**
 * 数据库工具类
 */

const mongoose = require('mongoose');
const dbconfig = require('config/config-parser').DBConfig;

const mainDB = mongoose.createConnection(dbconfig.mainDB.uri, dbconfig.mainDB.options);

mainDB.on('error', function (error) {
      log.error('连接recommendation数据库出现错误:' + error.message);
    })
    .on('disconnect', function (error) {
      log.warn('recommendation连接断开:' + error.message);
    })
    .once('open', function () {
      log.info('连接recommendation数据库成功')
    });

const testDB = mongoose.createConnection(dbconfig.testDB.uri, dbconfig.testDB.options);
testDB.on('error', console.error)
    .on('disconnect', console.warn)
    .once('open', console.info);

// 这里可以创建多个数据库连接返回,也可以只创建一个数据库连接然后通过useDb切换数据库
// 创建多个的好处是可以链接到不同ip/端口的数据库

module.exports = {
  mainDB: mainDB,
  testDB: testDB
};
