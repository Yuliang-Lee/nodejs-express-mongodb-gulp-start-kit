/**
 * sass编译任务
 * @type {Gulp|*|exports|module.exports}
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

// 生产环境
gulp.task('sass:prod', function() {
  gulp.src('./src/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('./static/dist/css'));
});

// 生产环境
gulp.task('sass:dev', function() {
  gulp.src('./src/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compact'}))
      .pipe(gulp.dest('./static/dist/css'));
});