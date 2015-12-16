/**
 * 编译时清空目录
 * @type {Gulp|*|exports|module.exports}
 */

var gulp = require('gulp');
var del = require('del');

// 清除dist目录所有文件
gulp.task('clean', ['clean:sass', 'clean:js', 'clean:html']);

gulp.task('clean:sass', function() {
  del.sync(['static/dist/css/**', '!static/dist/css']);
});

gulp.task('clean:js', function() {
  del.sync(['static/dist/js/**', '!static/dist/js']);
});

gulp.task('clean:html', function() {
  del.sync(['views/**', '!views']);
});
