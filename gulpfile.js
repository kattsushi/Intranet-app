'use strict'
var pkg = require('./package.json'),
    watchify = require('watchify'),
    path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    gls = require('gulp-live-server'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

// Definir directorios

// Directorios de librerias js
var ui = [ 'bower_components/Materilize/dist/js/materilize.js'
               ];




// Directorios de librerias vendor.js
var vendor = [
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/jquery-spinner/dist/jquery.spinner.min.js',
              'bower_components/jquery.slimscroll/jquery.slimscroll.min.js',
              'bower_components/angular/angular.min.js',
              'bower_components/angular-route/angular-route.min.js',
              'bower_components/angular-animate/angular-animate.min.js',
              'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
              'bower_components/textAngular/dist/textAngular-rangy.min.js',
              'bower_components/textAngular/dist/textAngular-sanitize.min.js',
              'bower_components/textAngular/dist/textAngular.min.js',
              'bower_components/underscore/underscore-min.js',
              'bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
              'bower_components/jquery-steps/build/jquery.steps.min.js',
              'bower_components/toastr/toastr.min.js',
              'bower_components/bootstrap-file-input/bootstrap.file-input.js',
              'bower_components/jquery.slimscroll/jquery.slimscroll.min.js',
              'bower_components/holderjs/holder.js',
              'bower_components/morris.js/morris.js',
              'bower_components/flot/jquery.flot.js',
              'bower_components/flot/jquery.flot.resize.js',
              'bower_components/flot/jquery.flot.pie.js',
              'bower_components/flot/jquery.flot.stack.js',
              'bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
              'bower_components/flot/jquery.flot.time.js',
              'bower_components/gauge.js/dist/gauge.min.js',
              'bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.min.js',
              'bower_components/angular-wizard/dist/angular-wizard.min.js',
              'bower_components/angular-ui-tree/dist/angular-ui-tree.min.js',
              'bower_components/ng-tags-input/ng-tags-input.min.js'];

//Directorios de librerias css
var LibCss =  [
               'bower_components/font-awesome/css/font-awesome.min.css',
                ];

// Inicializador del Servidor
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
    gulp.watch([pkg.paths.Watch.css,
                pkg.paths.Watch.js,
                pkg.paths.Watch.hbs],
                function () {
                  server.notify.apply(server, arguments);
                  });
    });

//Preprocesar hoja de estilos sass
gulp.task('styles', function() {
  return gulp.src(pkg.paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', notify.onError("<%= error.message %>")))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pkg.dest.css))
    .pipe(cssmin());

});

//Preprocesar archivos coffeescript bLoqueado.
gulp.task('coffeescript', function(){
    gulp.src(pkg.paths.coffee)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest(pkg.dest.JsDev));
});

//Concatenar archivos Javascript del Main
gulp.task('concat-main', function() {
  return gulp.src(pkg.paths.JsCon)
    .pipe(sourcemaps.init())
    .pipe(concat(pkg.paths.app))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pkg.dest.Js));
});

//Concatenar archivos Javascript del Ui

gulp.task('concat-ui', function() {
  return gulp.src(ui)
    .pipe(sourcemaps.init())
    .pipe(concat(pkg.paths.ui))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pkg.dest.Js));
});

//Concatenar Librerias Javascript vendor
gulp.task('concat-vendor', function() {
  return gulp.src(vendor)
    .pipe(sourcemaps.init())
    .pipe(concat(pkg.paths.vendors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pkg.dest.Js));
});

//Copiar archivos bloqueada.
gulp.task('copiar-css', function() {
  return gulp.src(LibCss)
    .pipe(gulp.dest(pkg.dest.css));
});

//Gestor de tareas de Gulp.
gulp.task('dev', ['styles','concat-main','concat-ui','concat-vendor', 'server'], function() {
    gulp.watch(pkg.paths.WatchSass, ['styles']);
});

gulp.task('pro', ['styles','coffeescript','concat-main','concat-ui', 'server'], function() {
    gulp.watch(pkg.paths.WatchSass, ['styles']);
});

gulp.task('default', ['dev'], function() {
});
