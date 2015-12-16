"use strict";
const gulp = require("gulp");
const processhtml = require('gulp-processhtml');

const libjs = [
  './static/**/jquery02.1.4.min.js',
  './static/**/react-0.14.3.min.js',
  './static/**/react-dom-0.14.3.min.js'
];

/**
 * 默认执行dev任务
 */
gulp.task("default", ['dev']);

gulp.task('html:prod', function () {
  gulp.src('./src/html/**/*.html')
      .pipe(processhtml({}))
      .pipe(gulp.dest('./views'));
});

gulp.task('html:dev', function () {
  gulp.src('./src/html/**/*.html')
      .pipe(gulp.dest('./views'));
});

// 把网站所有地方都会用到的lib库压缩成一个js
gulp.task('concatLib', function () {
  gulp.src(libjs)
      .pipe(concat('lib.js'))
      .pipe(gulp.dest('./static/dist/js/'));
});