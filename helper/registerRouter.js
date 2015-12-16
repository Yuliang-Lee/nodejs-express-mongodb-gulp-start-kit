var path = require('path');
var glob = require('glob');

function log(str) {
  console.log('register router: ', str);
}

module.exports = function(app) {
  var files = glob.sync(__dirname + '/../routes/**');
  files = files.filter(function (value, i, arr) {
    return value.endsWith('.js');
  });
  files.forEach(function (file) {
    const route = file.split('/routes')[1];// 没有考虑routes文件夹下包含reutes文件夹的情况
    const count = route.split('/');
    const routeName = count.pop().split('.')[0];
    const routePath = count.join('/');
    if(count.length == 1) {
      // 在routes目录下根据文件名指定路由
      if(routeName === 'index') {
        // 首页
        app.use('/', require(path.join(__dirname, '../routes', routeName)));
        log('/');
      } else {
        app.use('/' + routeName, require(path.join(__dirname, '../routes', routeName)));
        log(routePath + '/' + routeName );
      }
    } else {
      // 子目录下的路由根据文件夹+文件名指定路径
      log(routePath + '/' + routeName );
      app.use(routePath + '/' + routeName, require(path.join(__dirname, '../routes', routePath, routeName)));
    }
  });
};
