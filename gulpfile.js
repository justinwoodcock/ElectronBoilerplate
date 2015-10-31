'use strict';

var electron = require('electron-connect').server.create();
var gulp = require('gulp');
var jetpack = require('fs-jetpack');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var os = require('os');
var release_windows = require('./buil.windows');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var install = require('gulp-install');

var projectDir = jetpack;
var srcDir = projectDir.cwd('./app');
var destDir = projectDir.cwd('./build');

gulp.task('clean', function (callback) {
    return destDir.dirAsync('.', { empty: true });
});

gulp.task('copy', ['clean'], function () {
    return projectDir.copyAsync('app', destDir.path(), {
        overwrite: true,
        matching: [
            './node_modules/**/*',
            '*.html',
            './assets/**/*',
            'index.js',
            'package.json',
            './diskdb/*',
            './components/server/**/*'
        ]
    });
});

gulp.task('build', ['copy'], function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('sass', function () {
  gulp.src('./app/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(livereload());
});

gulp.task('serve', ['sass'], function () {
  livereload.listen();
  // Start browser process
  electron.start();
  // Restart browser process
  gulp.watch('./app/**/*.js', electron.restart);
  // Reload renderer process
  gulp.watch(['./app/**/*.js', './app/**/*.html'], electron.reload);

  gulp.watch(['./app/**/*.scss'], ['sass']);
});

gulp.task('install', function() {
  gulp.src(['./bower.json', './app/package.json'])
    .pipe(install());
});
