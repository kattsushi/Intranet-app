'use strict'
//--------------------------------------------------------------
var Sequelize = require('sequelize');
var pkg       = require('../../package.json');
//--------------------------------------------------------------
// Configurar la base de datos con sequelize
//--------------------------------------------------------------
var sequelize = new Sequelize("database","usuario","pass",{
      dialect:"sqlite", //OTROS VALORES: postgres, mysql, mariadb
	    //la propiedad storage SOLO ES PARA sqlite
	    storage:__dirname + pkg.config.sqlite.storage,
      define:{
		  timestamps:false,
      freezeTableName:true
	           }
    });
//--------------------------------------------------------------    
//EL CODIGO EN ESTA FUNCION SE EJECTUA
//SOLO HASTA QUE LA OPERCION ASINCRONA (AUTHENTICATE) TERMINA
sequelize.authenticate().then(function(){
  console.log('Base de datos lista para trabajar' + __dirname + pkg.config.sqlite.storage);
});
//--------------------------------------------------------------
// Mapeo de tablas
//--------------------------------------------------------------
var Usuario = sequelize.define("usuarios",{
      id: {
          primaryKey:true,
          type: Sequelize.INTEGER,
          autoIncrement :true
          },
      usuario : Sequelize.TEXT,
      nombre : Sequelize.TEXT,
      contraseña: Sequelize.TEXT,
      dominio: Sequelize.TEXT,
      nivel : Sequelize.INTEGER,
      falsolog : Sequelize.INTEGER,
      maxfalsolog : Sequelize.INTEGER,
      activo : Sequelize.TEXT,
      correo : Sequelize.TEXT,
      nota : Sequelize.TEXT,
      ordencorto : Sequelize.INTEGER
      },
      { freezeTableName: true,
        tableName:"usuarios"}
      );
var Pagina = sequelize.define("paginas", {
      id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true   
      },
      item: Sequelize.INTEGER,
      titulo: Sequelize.TEXT,
      link: Sequelize.TEXT,
      activo: Sequelize.TEXT,
      tags: Sequelize.TEXT,
      descripcion: Sequelize.TEXT,
      creado: Sequelize.TEXT,
      actualizado: Sequelize.TEXT
      },{ freezeTableName :true,
          tableName: "paginas"})

//--------------------------------------------------------------
// Exportar modelos a otros modulos
//--------------------------------------------------------------
module.exports.Usuario = Usuario;
module.exports.Pagina  = Pagina;
module.exports.sequelize = sequelize;
module.exports.PRUEBA = "hola";