'use strict'
//  Cargando Dependencias
  var express = require('express');
  var path = require('path');
  var middleware = require('./middleware');
  var sessionconfig = require('./config');
  var logger = require('./logger');
  var routes = require('./routes');
  var multer = require('multer');

//  Inicializando Express JS
  var app = express();

// Cargar Configuracion
  var config = require('./lib/config');

//  Configuracion del bodyParser
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

//  Configuracion de Morgan : gestor de logeo
  var logger = require('morgan');
  app.use(logger('dev'));

//  Configuracion de Cookies y Sesion
  var cookieParser = require('cookie-parser');
  app.use(cookieParser(sessionconfig.cookie.secret));

//  Configuracion de Sesiones de usuario
  var secret = sessionconfig.session && sessionconfig.session.secret ? sessionconfig.session.secret : "1234567890QWERTY";
  app.set('session.secret', secret);

//  Configuracion passport
  var passport = require('passport');
  middleware.passport(passport);

//  Configuracion de motor de Vistas HandleBars

  var exphbs = require('express-handlebars');

// Compilar Sass al vuelo
  var sass= require('node-sass-middleware');
  if (!config().html.css.sassPrecompile) {
    var pathSrc = __dirname + '/../' + config().paths.srcsass;
    var pathDes = __dirname + '/../' + config().paths.dest.css;
    console.log(pathDes);
    console.log(pathSrc);
    app.use(
      sass({
        src: pathSrc,
        dest: pathDes,
        debug: true,
        outputStyle: 'compressed'
      }));
  }

  // Configuracion Handlebars
  app.engine(config().views.engine, exphbs({
    extname: config().views.extension,
    defaultLayout: config().views.layout,
    layoutsDir: __dirname + '/views/',
    partialsDir: __dirname + '/views/partials'
  }));

  // Configuracion del motor de Vistas
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', config().views.engine);
  //  Servir archivos estaticos
  app.use(express.static(path.join(__dirname, '../client/assets')));
  //  Static assets
  app.use('/shared', express.static(path.join(__dirname, '../shared')));
  app.use('/vendors', express.static(path.join(__dirname, '../bower_components')));
  app.use('/js', express.static(path.join(__dirname, '/../built/scripts')));
  app.use('/css', express.static(path.join(__dirname, '/../built/css')));

  // Enviar datos de Configuracion a la Vistas
  app.use(function(req, res, next) {
    res.locals.config = config();
    next();
  });

/*
  var helpers = require('./helpers');
  exphbs.registerSiteHelpers(helpers);


  var hbs = require('express-hbs');
  app.engine('hbs', hbs.express3({
      partialsDir: path.join(__dirname, 'views/partials')
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views'));
*/



//  Inicializador del Validador de Codigo
  var validator = require('express-validator');
  app.use(validator());

//  Inicializador de Sesiones
  var session = require('express-session');
  app.use(session({
      secret: secret,
      key: 'app.sid',
      resave: false,
      saveUninitialized: false
  }));

//  Configuracion e Inicializador de Passport
  var passport = require('passport');
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(routes.autoLogin); // auto login from token

//  Enviar informacion al front.
  app.use(function(req, res, next) {
    // Make sure we have a locals value.
    res.locals = res.locals || {};
    res.locals.session = {
        user: req.user
    };
    next();
  });



  app.use('/', routes);

//  Manejar Codigo de Error 404
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

//  Manejar otros codigos de Error en entorno de Desarrollo
  if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
          if (err.status != 404) {
              console.log('request error dev', err ? err.message : err, err ? err.stack : '');
          }
          res.status(err.status || 500);
          res.render('error', {
              message: err.message,
              error: err
          });
      });
  }

//  Manejar codigos de Error en entorno de Produccion
  app.use(function(err, req, res, next) {
      console.log('request error dev', err ? err.message : err, err ? err.stack : '');
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: {}
      });
  });

module.exports = app;
