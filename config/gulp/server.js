const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('startDev', function() {
  nodemon({
    script: 'cluster.js'
  })
});
