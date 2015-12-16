const fs = require("fs");

function registerTasks(folder) {
  var task = fs.readdirSync(__dirname + folder);
  task.forEach(function (task) {
    require(__dirname + folder + task);
  });
}

registerTasks('/config/gulp/');

// 开发环境任务
//gulp.task('default', ['sass:watch', 'sass']);

// 生产环境任务
//gulp.task('prod', ['clean:sass', 'sass']);