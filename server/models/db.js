var Sequelize = require('sequelize');
    config    = require('../config'),
    logger    = require('../logger'),
    pkg       = require('../../package.json');
var Paginas = {};

//----- CONFIGURAR LA BASE DE DATOS con sequelize
var sequelize = new Sequelize("database","usuario","pass",{
	dialect:"sqlite", //OTROS VALORES: postgres, mysql, mariadb
	//la propiedad storage SOLO ES PARA sqlite
	storage:__dirname + pkg.config.sqlite.storage,
	define:{
		timestamps:false,
    freezeTableName:true
	}
});
	//EL CODIGO EN ESTA FUNCION SE EJECTUA
	//SOLO HASTA QUE LA OPERCION ASINCRONA (AUTHENTICATE) TERMINA
sequelize.authenticate().then(function(){
  console.log(__dirname + '/database.db');
});

//Mapeo de tablas
var Paginas = sequelize.define("Paginas",{
  id: {
      primaryKey:true,
      type: Sequelize.INTEGER
  },
  titulo : Sequelize.TEXT,
  link : Sequelize.TEXT,
  activo: Sequelize.TEXT,
  tags: Sequelize.TEXT,
  descripcion : Sequelize.TEXT,
  creado : Sequelize.DATE
},{
  tableName:"paginas"
});
/*
Paginas = function () {Paginas.findOne().then(function(pagina){
  console.log(pagina.titulo +' '+ pagina.id);
})};
*/

module.exports.Paginas = Paginas;
module.exports.sequelize = sequelize;
