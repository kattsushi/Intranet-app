var _ = require('lodash');
var    express = require('express');
var    router = express.Router();
var    uuid = require('node-uuid');
var    moment = require('moment');
var    logger = require('../logger');
var    modelo = require('../models/index');
// var    controllers = require('../controllers');


router.get('/', function(req, res, next) {
    res.render('index', {
        title: "Intranet"
    });
    modelo.usuario.findById(69).then(function(users) {
        console.log( users.nombre);
        return null;
    });
});

router.get('/menu', function(req, res, next) {
    var pag = {};  
    modelo.pagina.findAll().then(function (paginas) {
          res.jsonp(paginas);
    modelo.item.findAll().then(function (paginas,item) {
          res.jsonp(item);
             })      
         });
    
});
router.get('/usuario',function(req,res,next) {
    modelo.usuario.findAll().then(function (usuarios) {
        res.jsonp(usuarios);
    })
})


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
