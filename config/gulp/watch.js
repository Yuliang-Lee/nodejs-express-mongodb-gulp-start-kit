/**
 * 开发环境下需要监听文件变化自动重新执行指定任务
 * @type {Gulp|*|exports|module.exports}
 */

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('watch', function () {
  // 监听文件变化
  gulp.watch(['src/scss/**'], ['sass:dev']);
  gulp.watch(['src/js/**'], ['js:dev']);
  gulp.watch(['src/html/**'], ['html:dev']);
});
