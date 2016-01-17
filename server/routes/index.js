var _ = require('lodash');
var    express = require('express');
var    router = express.Router();
var    uuid = require('node-uuid');
var    moment = require('moment');
var    logger = require('../logger');
var    modelo = require('../models/index');
// var    controllers = require('../controllers');
var  isProduction = process.env.NODE_ENV === 'production';

router.get('/', function(req, res, next) {
    res.render('index', {
        title: "Intranet",
        env : isProduction
        });
  });

router.get('/menu/:id', function(req, res, next) {
    var pag = {};
    modelo.pagina.findAll({ where : {
                            id : req.params.id },
                            include : [{
                            model : modelo.submenu,
                            as: "Submenu" }] }).then(function (paginas) {
          res.json(paginas);

        });
});
router.get('/menu/', function(req, res, next) {
    var pag = {};
    modelo.pagina.findAll({ include : [{
                            model : modelo.submenu,
                            as: "Submenu" }] }).then(function (paginas) {
          res.json(paginas);

        });
});

router.get('/inicio',function(req,res,next) {


    modelo.usuario.findAll({
                            attributes :['id','nombre','usuario','nivel']
                            ,where : {
                              usuario : req.query.nombreUsuario,
                              contraseña : req.query.clave
                            }
                          }).then(function (usuarios) {
          if (usuarios == null){
            return null;
          } else {
            res.jsonp(usuarios);
            }
    })
});

router.get('/agenda',function(req,res,next) {

    modelo.usuario.findAll({include : [{
                                  model: modelo.directorio,
                                  as :"Directorio"
                                }]
                          }).then(function (usuarios) {
          if (usuarios == null){
            return null;
          } else {
            res.jsonp(usuarios);
            }
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
