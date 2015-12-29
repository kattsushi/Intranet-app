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
      activo : Sequelize.TEXT,
      correo : Sequelize.TEXT,
      nota : Sequelize.TEXT
      },
      { freezeTableName: true,
        tableName:"usuarios"}
      );
//--------------------------------------------------------------
var Pagina = sequelize.define("paginas", {
      id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true
      },
      usuario: Sequelize.INTEGER,
      titulo: Sequelize.TEXT,
      link: Sequelize.TEXT,
      activo: Sequelize.TEXT,
      tags: Sequelize.TEXT,
      descripcion: Sequelize.TEXT,
      creado: Sequelize.TEXT,
      actualizado: Sequelize.TEXT
      },{ freezeTableName :true,
          tableName: "paginas"});
//--------------------------------------------------------------
var Item = sequelize.define("items", {
      id: {
        primaryKey: true,
        type:Sequelize.INTEGER,
        autoIncrement:true
      },
      nombre:Sequelize.TEXT,
      pagina:Sequelize.INTEGER,
      contenido:Sequelize.INTEGER,
      usuario:Sequelize.INTEGER,
      creado:Sequelize.TEXT,
      actualizado:Sequelize.TEXT,
      mostrar:Sequelize.TEXT,
      logeado:Sequelize.TEXT
      },{freezeTableName:true,
         tableName: "items"});
//--------------------------------------------------------------
var Submenu = sequelize.define("submenu",{
      id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement :true
          },
      nombre : Sequelize.TEXT,
      ruta: Sequelize.TEXT,
      paginaId: Sequelize.INTEGER
      },
      { freezeTableName: true,
        tableName:"submenu"}
      );
//--------------------------------------------------------------
var Directorio = sequelize.define("directorio",{
      id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement :true
          },
      nombre : Sequelize.TEXT,
      apellido : Sequelize.TEXT,
      ruta: Sequelize.TEXT,
      ubicacion : Sequelize.TEXT,
      cargo : Sequelize.TEXT,
      departamento : Sequelize.TEXT,
      extension: Sequelize.TEXT,
      correo : Sequelize.TEXT,
      perfil1 : Sequelize.TEXT,
      perfil2 : Sequelize.TEXT,
      },
      { freezeTableName: true,
        tableName:"directorio"}
      );

//--------------------------------------------------------------
//------------Mapeo Paginas - Submenu 1 - N
//--------------------------------------------------------------
Usuario.hasOne(Directorio,{
                     foreignKey:"id",
                     as:"Directorio"
                        });
//--------------------------------------------------------------
//------------Mapeo Paginas - Submenu 1 - N
//--------------------------------------------------------------
Pagina.hasMany(Submenu,{
                     foreignKey:"paginaId",
                     as:"Submenu"
                        });
//--------------------------------------------------------------
// Exportar modelos a otros modulos
//--------------------------------------------------------------
module.exports.Usuario = Usuario;
module.exports.Directorio = Directorio;
module.exports.Pagina  = Pagina;
module.exports.Item  = Item;
module.exports.Submenu  = Submenu;
module.exports.sequelize = sequelize;
module.exports.PRUEBA = "hola";
