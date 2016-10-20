'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./lib'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['scss']);
});
