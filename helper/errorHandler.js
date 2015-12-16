/**
 * 事件处理
 */


module.exports = function(app){

  //catch 404 and forward to error handler
  app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // production
  if('production' === app.get('env')){
    // production error handler, no stacktraces leaked to user
    app.use(function(err, req, res, next){
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
  }

  // development
  if('development' === app.get('env')){
    // development error handler, will print stacktrace
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // test
  if('test' === app.get('env')){
    // test error handler, no stacktraces leaked to user
    app.use(function(err, req, res, next){
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
  }
};
