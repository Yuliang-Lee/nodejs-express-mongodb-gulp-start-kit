/**
 * 生产环境编译任务
 */

"use strict";
const gulp = require("gulp");
const runSequence = require('run-sequence').use(gulp);
const concat = require('gulp-concat');

/**
 * gulp prod
 */
gulp.task("prod", ['clean'], function () {
  runSequence(
      ['sass:prod', 'js:prod'],
      ['concatLib', 'html:prod']
  );
});
