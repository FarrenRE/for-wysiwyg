'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

const paths = {
  sass: {
    src: './src/sass/*.sass',
    dest: './dest/css'
  }
}


function style() {
  return gulp
    .src( paths.sass.src )
    .pipe(sourcemaps.init())
    .pipe( sass.sync().on( 'error', sass.logError ) )
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write())
    .pipe( gulp.dest( paths.sass.dest ) )
}

function watchFiles() {
  gulp.watch( paths.sass.src, style );
}

const build = gulp.series( style );

exports.style = style;
exports.watch = watchFiles;
exports.default = build;
