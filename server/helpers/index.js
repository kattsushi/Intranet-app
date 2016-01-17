// Definir Dependencias
var  string    = require('string');
var  hbs       = require('express-hbs');
var  moment    = require('moment');
var  path      = require('path');
var  polyglot  = require('node-polyglot').instance;
var  _         = require('lodash');
var  config    = require('../config');

//Definir los templates para los scripts y assets
var  assetTemplate = _.template('<%= source %>?v=<%= version %>');
var  scriptTemplate = _.template('<script type="text/javascript" src="<%= source %>?v=<%= version %>"></script>');
var  isProduction = process.env.NODE_ENV === 'production';
// Definir rutas de los archivos
var   coreHelpers = {},
      registerHelpers,
      scriptFiles = {
        production: [
          '/js/angular.js',
          '/js/angular-animate.js',
          '/js/angular-aria.js',
          '/js/angular-resource.js',
          '/js/angular-material.js',
          '/js/angular-route.js',
          '/js/angular-cookies.js',
          '/js/angular-material-icons.js',
          '/js/angular-sanitize.js',
          '/js/wysiwyg.js',
          '/js/md-data-table.js',
          '/js/jquery.js',
          '/js/navAccordion.js',
          '/js/retina.js',
          '/js/bootstrap.js',
          '/js/ui-bootstrap.js',
          '/js/moment.js',
          '/js/spin.js',
          '/js/angular-spinner.js',
          '/app/ui.js',
          '/app/app.js',
          '/app/main/mainCtrl.js',
          '/app/main/mainServ.js',
          '/app/agenda/agendaCtrl.js',
          '/app/agenda/agendaServ.js',
          '/app/agenda/agendaFilt.js',
          '/app/inicio/inicioCtrl.js',
          '/app/usuario/usuarioServ.js',
          '/app/administracion/adminCtrl.js',
          '/app/paginas/paginasCtrl.js',
          '/app/paginas/paginasServ.js',
          '/app/calendario/calendarioDir.js'
          //, '/js/vendor.min.js',
          //'/js/app.min.js'
        ],
        development: [
          '/js/angular.js',
          '/js/angular-animate.js',
          '/js/angular-aria.js',
          '/js/angular-resource.js',
          '/js/angular-material.js',
          '/js/angular-route.js',
          '/js/angular-cookies.js',
          '/js/angular-material-icons.js',
          '/js/angular-sanitize.js',
          '/js/wysiwyg.js',
          '/js/md-data-table.js',
          '/js/jquery.js',
          '/js/navAccordion.js',
          '/js/retina.js',
          '/js/bootstrap.js',
          '/js/ui-bootstrap.js',
          '/js/moment.js',
          '/js/spin.js',
          '/js/angular-spinner.js',
          '/app/ui.js',
          '/app/app.js',
          '/app/main/mainCtrl.js',
          '/app/main/mainServ.js',
          '/app/agenda/agendaCtrl.js',
          '/app/agenda/agendaServ.js',
          '/app/agenda/agendaFilt.js',
          '/app/inicio/inicioCtrl.js',
          '/app/usuario/usuarioServ.js',
          '/app/administracion/adminCtrl.js',
          '/app/paginas/paginasCtrl.js',
          '/app/paginas/paginasServ.js',
          '/app/calendario/calendarioDir.js'
        ]
      };

  // definir fechas
coreHelpers.date = function(context, options) {
  if (!options && context.hasOwnProperty('hash')) {
    options = context;
    context = undefined;

    //
    //
    if (this.published_at) {
      context = this.published_at;
    }
  }

  // asegurarse que context es indefinido, no es null, por causa del algun error
  context = context === null ? undefined : context;

  var f = options.hash.format || 'MMM Do, YYYY',
    timeago = options.hash.timeago,
    date;


  if (timeago) {
    date = moment(context).fromNow();
  } else {
    date = moment(context).format(f);
  }
  return date;
};

//
// ### URI Modificando un helper
//
// *Ejemplo*
// `{{encode uri}}`
/*    production: [
          '/js/vendor.min.js',
          '/js/app.min.js'
        ],
        development: [
          '/js/vendor.js',
          '/js/materialize.js',
          '/js/app/app.js',
          '/js/app/ui.js'
        ]
      };*/
// Retorna URI en un string
//
coreHelpers.encode = function(context, str) {
  var uri = context || str;
  return new hbs.handlebars.SafeString(encodeURIComponent(uri));
};

console.log(isProduction);


// ### Asset helper
//
// *Ejemplo:*
// `{{asset "css/screen.css"}}`
// `{{asset "css/screen.css" ghost="true"}}`
// retorna la ruta especifica del asset. The ghost
//
coreHelpers.asset = function(context, options) {
  var output = '/';

  // Deshacerte de cualquier slash que est en fuera de contexto
  context = context.replace(/^\//, '');
  output += context;

  if (!context.match(/^favicon\.ico$/)) {
    output = assetTemplate({
      source: output,
      version: coreHelpers.assetHash
    });
  }
  return new hbs.handlebars.SafeString(output);
};

coreHelpers.forumScriptTags = function() {
  var scriptList = isProduction ? scriptFiles.production : scriptFiles.development;

  scriptList = _.map(scriptList, function(fileName) {
    return scriptTemplate({
      source: fileName,
      version: coreHelpers.assetHash
    });
  });

  return scriptList.join('');
};


registerHelpers = function(assetHash) {
  // assets
  coreHelpers.assetHash = assetHash;
};

var registerSiteHelpers = function(sitehbs) {
  // Registrar helpers
  sitehbs.registerHelper('asset', coreHelpers.asset);

  sitehbs.registerHelper('date', coreHelpers.date);

  sitehbs.registerHelper('encode', coreHelpers.encode);

  sitehbs.registerHelper('forumScriptTags', coreHelpers.forumScriptTags);

};

module.exports = coreHelpers;
module.exports.loadCoreHelpers = registerHelpers;
module.exports.registerSiteHelpers = registerSiteHelpers;
module.exports.scriptFiles = scriptFiles;
