'use strict'
var watchify = require('watchify'),
    path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    gls = require('gulp-live-server'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');



gulp.task('server', function() {
    var options = {
        cwd: undefined
    };
    options.env = process.env;
    options.env.NODE_ENV = 'development';

    var server = gls('server/bin/www', options, 35729);
    server.start();

    gulp.watch([
            'config*.js',
            'server/bin/*',
            'server/**/*.js*'
        ], function () {
        server.start();
    });
    gulp.watch([
            'client/assets/**/*.css',
            'client/assets/**/*.js',
            'server/views/**/*.hbs'
        ], function () {
        server.notify.apply(server, arguments);
    });
});


gulp.task('styles', function() {
  return gulp.src('client/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/assets/css'))
    .pipe(cssmin());
});

gulp.task('coffeescript', function(){
    gulp.src('client/coffee/**/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('client/assets/js/app'));
});


gulp.task('concat-main', function() {
  return gulp.src('client/assets/js/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/assets/js'));
});



gulp.task('dev', ['styles','coffeescript','concat-main', 'server'], function() {
    gulp.watch('client/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['dev'], function() {
});
