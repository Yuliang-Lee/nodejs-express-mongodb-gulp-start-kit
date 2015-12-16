const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('js:dev', function() {
  gulp.src(['./src/js/**/*.jsx', './src/js/**/*.js'])
      .pipe(babel({
        presets: ['react', 'es2015']
      }))
      .pipe(gulp.dest('./static/dist/js'));
});

gulp.task('js:prod', function() {
  gulp.src(['./src/js/**/*.jsx', './src/js/**/*.js'])
      .pipe(babel({
        presets: ['react', 'es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./static/dist/js'));
});