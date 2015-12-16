/**
 * 开发环境编译任务
 */

"use strict";
var gulp = require("gulp");
var runSequence = require('run-sequence').use(gulp);

/**
 * gulp dev
 */
gulp.task("dev", ['clean'], function () {
  runSequence(
      ['sass:dev',  'js:dev', 'html:dev'],
      'watch'
  );
});
