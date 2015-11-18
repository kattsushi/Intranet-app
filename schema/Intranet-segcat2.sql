CREATE TABLE `Usuarios` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`usuario` varchar(128) NOT NULL DEFAULT '-',
`nombre` varchar(128) NOT NULL DEFAULT '-',
`contraseña` varchar(32) NOT NULL DEFAULT '-',
`dominio` varchar(32) NOT NULL DEFAULT '',
`nivel` int(11) NOT NULL DEFAULT 0,
`falsolog` int(11) NOT NULL DEFAULT 0,
`maxfalsolog` int(11) NOT NULL DEFAULT 999,
`activo` char(1) NOT NULL DEFAULT 'Y',
`correo` varchar(128) NOT NULL DEFAULT '',
`nota` varchar(255) NOT NULL DEFAULT '',
`ordencorto` int(11) NOT NULL,
PRIMARY KEY (`id`) ,
UNIQUE INDEX `usuario_idx` (`usuario` ASC, `activo` ASC)
)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `Paginas` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`item` int(11) NOT NULL,
`titulo` varchar(255) NULL DEFAULT NULL,
`link` varchar(255) NULL DEFAULT NULL,
`activo` varchar(255) NULL DEFAULT 'Y',
`tags` varchar(255) NULL DEFAULT '',
`descripcion` varchar(255) NULL DEFAULT '',
`creado` datetime NULL DEFAULT '0000-00-00',
`actualizado` datetime NULL DEFAULT '0000-00-00',
PRIMARY KEY (`item`) 
)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `Contenido` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`item` int(11) NOT NULL DEFAULT '0',
`ordencorto` int(11) NULL DEFAULT '0',
`objhijo` char(1) NOT NULL DEFAULT 'T' COMMENT 'texto, forma, archivo, imagen.',
`archivo` int(11) NULL DEFAULT '0',
`nombre` varchar(32) NOT NULL DEFAULT '',
`data` text NOT NULL COMMENT '\'\'',
PRIMARY KEY (`id`, `item`) 
)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `Archivos` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`objpadre` int(11) NOT NULL DEFAULT '0',
`ordencorto` int(11) NULL DEFAULT '0',
`nombre` varchar(64) NOT NULL DEFAULT '',
`extencion` varchar(3) NULL DEFAULT '',
`creado` datetime NULL DEFAULT '0000-00-00' ON UPDATE CURRENT_TIMESTAMP,
`actualizado` date NULL,
PRIMARY KEY (`id`) 
)
DEFAULT CHARACTER SET = utf8;

CREATE TRIGGER ON `Archivos` FOR EACH ROW ;

CREATE TABLE `Items` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`nombre` varchar(32) NOT NULL DEFAULT '',
`objpadre` int(11) NOT NULL DEFAULT '0',
`usuario` int(11) NOT NULL DEFAULT '0',
`orden` char(1) NOT NULL,
`fecha` date NULL DEFAULT '0000-00-00',
`fecvaldesde` datetime NOT NULL DEFAULT '0000-00-00',
`fecvalhasta` datetime NOT NULL DEFAULT '0000-00-00',
`mostrar` char(1) NULL DEFAULT 'S',
`logeado` char(1) NULL,
PRIMARY KEY (`id`) ,
INDEX `padre_idx` (`objpadre` ASC)
)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `Nivel` (
`id` int(11) NOT NULL,
`nombre` varchar(32) NOT NULL,
PRIMARY KEY (`id`) 
)
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `Dominios` (
`id` int(11) NOT NULL,
`nombre` varchar(32) NOT NULL,
PRIMARY KEY (`id`) 
)
DEFAULT CHARACTER SET = utf8;


ALTER TABLE `Nivel` ADD CONSTRAINT `Nivel_Usuarios` FOREIGN KEY (`id`) REFERENCES `Usuarios` (`nivel`);
ALTER TABLE `Dominios` ADD CONSTRAINT `fk_Dominios_Usuarios_1` FOREIGN KEY (`id`) REFERENCES `Usuarios` (`dominio`);
ALTER TABLE `Items` ADD CONSTRAINT `fk_Items_Paginas_1` FOREIGN KEY (`id`) REFERENCES `Paginas` (`item`);
ALTER TABLE `Items` ADD CONSTRAINT `fk_Items_Contenido_1` FOREIGN KEY (`id`) REFERENCES `Contenido` (`item`);
ALTER TABLE `Usuarios` ADD CONSTRAINT `fk_Usuarios_Items_1` FOREIGN KEY (`id`) REFERENCES `Items` (`usuario`);
ALTER TABLE `Archivos` ADD CONSTRAINT `fk_Archivos_Contenido_1` FOREIGN KEY (`id`) REFERENCES `Contenido` (`archivo`);

