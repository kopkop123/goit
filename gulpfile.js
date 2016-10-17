'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');

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

gulp.task('sprite', function () {
  var spriteData = gulp.src('js-exam/img/images-for-sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.less'
  }));
  spriteData.img.pipe(gulp.dest('js-exam/img/'));
  spriteData.css.pipe(gulp.dest('js-exam/css/'));
});