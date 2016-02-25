PRUEBA PRÁCTICA JAVASCRIPT

Utilizando el script de base de datos relacional o el .dump de base de datos no relacional adjunto a esta prueba, realizar:

Crear y compartir un repositorio con esta prueba.

Realizar la migración de dicha base de datos y realizar su respectivo CRUD para cada

Crear el API necesaria para que otra aplicación pueda realizar transacciones (Consultar y crear).

Crear una interfaz para realizar compras. Tener en cuenta: Pueden existir compras sin sede. No puede existir una factura sin un cliente. El precio puede ser modificado y almacenado en la tabla compras, columna

Crear un pequeño formulario donde se escriba el documento del cliente y traer en forma de factura sus compras. Tener en cuenta:

Formato de factura HTML:

Documento:

Nombres:

id productos Productos sede precio

Total Precio:

Si el precio en la tabla de compra no existe, se debe tomar por defecto el precio Debe ser posible exportar a PDF y solicitar la información en formato JSON.

    Cada vez que se realice select, update o delete; se debe ingresar el registro en la tabla log, describiendo el tipo de movimiento y algún dato que crea necesario o de gran ayuda para una bitácora.

    Plantear herramientas y tecnologías necesarias para su publicación, seguridad y mantenimiento de esta aplicación, bajo el supuesto de una concurrencia diaria de 500.000 a 1.000.000 usuarios.

    Crear un plan de escabilidad al momento de tener un alto volumen de datos, escrituras y lecturas en disco.

    Automatizar un reporte semanal, que sea enviado a un correo electrónico y contenga los siguientes cálculos: a. Diferencia promedio, máxima y mínima entre tabla productos columna precio y tabla compras columna precio. b. Número de compras. c. Total ganancias. d. Compras promedio por minuto.

NOTA: Se le hará llegar un script SQL y un archivo .JSON uno para trabajar con BD Relacional , y el otro para bd mongodb. Queda a su elección cuál base de datos usar

Url archivo Mysql: https://drive.google.com/open?id=0B7Y2Jg6ddM0eTU9KOE5jbzVwUUU

## Configuracion del entorno de desarrollo
#### Requisitos

* [Nodejs](http://www.nodejs.org/)
* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

#### Dependencias

* [Gulp](http://gulpjs.com/) (Automatizador de tareas)
* [Bower](http://bower.io/) (Administrador de paquetes para el Fron-end)
* [Sass](http://sass-lang.com/) (Preprosesador de Hojas de Estilos)

#### Instalacion
Corre estos comandos para la instalacion.
#####1. Instalar Gulp y Bower

    $ sudo npm install -g gulp bower

#####2. Instalar dependencias

    $ npm install
    $ bower install


Para inicializar el servidor corre este comando

    $ gulp dev

Accede al servicio local , entra en tu navegador en el siguiente enlace:

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
