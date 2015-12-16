/**
 * 多核启动
 */


var cluster = require('cluster');

//CPU几核？
var cpus = require('os').cpus().length;
var server;

//子进程监听消息处理函数
var workerListener = function (msg) {
  if (msg.access)
    console.log('user access %s, worker [%d]',
        msg.access, msg.workerid);
};
//fork新的子进程函数
var forkWorker = function(listener){
  var worker = cluster.fork();
  console.log('worker [%d] has been created',
      worker.process.pid);
  worker.on('message', listener);
  return worker;
};

//Cluster处理
var cluster = require('cluster');
if (cluster.isMaster) {
  for (var i = 0; i < cpus; i++) {
    forkWorker(workerListener);
  }
} else {
  var http = require('http');
  var app = require('app').app;
  server = http.createServer(app).listen(app.get('port'));
  //app.listen(app.get('port'), function(){
  //  console.log('development Express server listening on port ' + app.get('port'));
  //});
}

module.exports = server;

//Cluster收到子进程退出消息
cluster.on('exit', function (worker, code, signal) {
  console.log('worker [%d] died %s, fork a new one.',
      worker.process.pid, code || signal);
  forkWorker(workerListener);
});
//Cluster收到子进程运行消息
cluster.on('online', function(worker){
  console.log('worker [%d] is running.', worker.process.pid);
});

