Intranet-app Seguros Catatumbo
Trabajo de Grado para optar por el titulo de Ing. Sistemas
============

Aplicacion desarrollada en el Stack de desarrollo de Nodejs + ExpressJs + Handlerbars + Sass + Bower + Gulp + MySql.

## Configuracion del entorno de desarrollo
#### Requisitos

* [Nodejs](http://www.nodejs.org/)
* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

#### Dependencias

* [Gulp](http://gulpjs.com/) (Automatizador de tareas)
* [Bower](http://bower.io/) (Administrador de paquetes para el Fron-end)
* [Less](http://sass-lang.com/) (Preprosesador de Hojas de Estilos)

#### Instalacion
Corre estos comandos para la instalacion.
#####1. Instalar Gulp y Bower

    $ sudo npm install -g gulp bower

#####2. Instalar dependencias

    $ npm install
    $ bower install


Para inicializar el servidor corre este comando

    $ gulp dev

Accede al sericio local , entra en tu navegador en el siguiente enlace:

    http://localhost:3000/


## Estructura de directorios

    client/                 --> Todos los archivos del cliente
      app/                  --> Archivos Javascript
      assets/               --> Archivos publicos estativos
        css/                --> Archivos Css
        img/                --> Archivos de imagenes
        font/               --> Archivos de fuentes
      sass/                 --> Archivos Sass
    schema/                 --> Esquemas de db
    server/                 --> Todos los archivos del servidor
      config/               --> Archivo de configuracion
      controllers/          --> Controladores
      helpers/              --> funciones para las vistas
      middleware/           --> Middlewares para express
      models/               --> Modelos de datos
      routes/               --> rutas
      views/                --> Vistas
      app.js                --> Aplicacion
      logger.js             --> Ayuda para log
      utils.js              --> Libreria de utilidades
    shared/                 --> Archivos de subida
    bower.json              --> Archivo de configuracion de bower
    config.development.js   --> Archivo de configuracion para el desarrollo
    config.js               --> Archivo de configuracion por defecto.
    gulpfile.js             --> Archivo de configuracion de gulp
