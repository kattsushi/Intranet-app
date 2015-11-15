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


























/*
-- Users
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(254) NOT NULL,
  `password` varchar(256) NOT NULL DEFAULT '',
  `screen_name` varchar(64) NOT NULL DEFAULT '',
  `avatar_url` varchar(256) DEFAULT NULL,
  `created` int(10) unsigned NOT NULL,
  `banned_until` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user_tokens` (
  `user_id` int(11) unsigned NOT NULL,
  `token` varchar(40) NOT NULL,
  `type` varchar(16) NOT NULL DEFAULT 'signin',
  `created` int(10) unsigned NOT NULL,
  `expires` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`token`),
  UNIQUE KEY `uniq_token` (`token`),
  KEY `k_user_id` (`user_id`),
  KEY `k_expires` (`expires`),
  CONSTRAINT `fk_user_tokens_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tags` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tag` varchar(64) NOT NULL DEFAULT '',
  `count` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_tag` (`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(11) unsigned NOT NULL,
  `title` varchar(256) NOT NULL DEFAULT '',
  `body` text NOT NULL,
  `slug` varchar(128) NOT NULL DEFAULT '',
  `created` int(10) unsigned NOT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_slug` (`slug`),
  KEY `fk_posts_users_author_id` (`author_id`),
  CONSTRAINT `fk_posts_users_author_id` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `posts_tags` (
  `tag_id` int(11) unsigned NOT NULL,
  `post_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`tag_id`,`post_id`),
  KEY `k_post_id` (`post_id`),
  CONSTRAINT `fk_posts_tags_post_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  CONSTRAINT `fk_posts_tags_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; */
