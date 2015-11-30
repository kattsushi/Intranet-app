var _ = require('lodash');
var    express = require('express');
var    router = express.Router();
var    uuid = require('node-uuid');
var    moment = require('moment');
var    logger = require('../logger');
// var    controllers = require('../controllers');
var    modelos = require('../models');

router.get('/', function(req, res, next) {
    res.render('index', {
        title: "Intranet"
    });
});

router.get('/inicio', function(req, res, next) {
        res.render('inicio', {
        titles: "inicio"
       })
    });


router.get('/error/500', function(req, res, next) {
    res.render('error', {
        title: 'Error 500 - Falla del servidor',
        message: 'Error Desconocido',
        error: {
            status: 'ha ocurrido algun error fatal',
            stack: ''
        }
    });
});

module.exports = router;
