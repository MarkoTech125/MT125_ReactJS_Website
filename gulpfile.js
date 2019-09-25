'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// SCSS source and CSS destination

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// compile SCSS
gulp.task('compile_scss', async function(){
   return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));


});

// detect changes in SCSS
gulp.task('watch_scss', async function(){
    return gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});


// run tasks
gulp.task('default', gulp.series('watch_scss'));