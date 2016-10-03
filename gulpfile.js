'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

//gulp.task('sass', function () {
//  return gulp.src('js-exam/css/*.scss')
//    .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest('js-exam/css/'));
//});

gulp.task('compress', function() {
  gulp.src('js-exam/img/images-big/*')
  .pipe(imagemin())
  .pipe(gulp.dest('js-exam/img/'))
});
 
gulp.task('sass:watch', function () {
  gulp.watch('js-exam/css/*.scss', ['sass']);
});