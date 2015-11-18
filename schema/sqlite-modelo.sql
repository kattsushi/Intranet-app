

CREATE TABLE "Usuarios" (
"id" INTEGER(11) PRIMARY KEY AUTOINCREMENT NOT NULL,
"usuario" TEXT(128) NOT NULL DEFAULT '-',
"nombre" TEXT(128) NOT NULL DEFAULT '-',
"contraseña" TEXT(32) NOT NULL DEFAULT '-',
"dominio" TEXT(32) NOT NULL DEFAULT '',
"nivel" INTEGER(11) NOT NULL DEFAULT 0,
"falsolog" INTEGER(11) NOT NULL DEFAULT 0,
"maxfalsolog" INTEGER(11) NOT NULL DEFAULT 999,
"activo" TEXT(1) NOT NULL DEFAULT 'Y',
"correo" TEXT(128) NOT NULL DEFAULT '',
"nota" TEXT(255) NOT NULL DEFAULT '',
"ordencorto" INTEGER(11) NOT NULL,
CONSTRAINT "fk_Usuarios_Items_1" FOREIGN KEY ("id") REFERENCES "Items" ("usuario")
);

CREATE INDEX "usuario_idx" ON "Usuarios" ("usuario", "activo");

CREATE TABLE "Paginas" (
"id" INTEGER(11) NOT NULL,
"item" INTEGER(11) NOT NULL,
"titulo" TEXT(255) DEFAULT NULL,
"link" TEXT(255) DEFAULT NULL,
"activo" TEXT(255) DEFAULT 'Y',
"tags" TEXT(255) DEFAULT '',
"descripcion" TEXT(255) DEFAULT '',
"creado" TEXT(255) DEFAULT '0000-00-00',
"actualizado" TEXT(255) DEFAULT '0000-00-00',
PRIMARY KEY ("item") ,
CONSTRAINT "item" UNIQUE ("id")
);

CREATE TABLE "Contenido" (
"id" INTEGER(11) PRIMARY KEY AUTOINCREMENT NOT NULL,
"item" INTEGER(11) NOT NULL DEFAULT '0',
"ordencorto" INTEGER(11) DEFAULT '0',
"objhijo" TEXT(1) NOT NULL DEFAULT 'T',
"archivo" INTEGER(11) DEFAULT '0',
"nombre" TEXT(32) NOT NULL DEFAULT '',
"data" TEXT(255) NOT NULL,
PRIMARY KEY ("item")
);

CREATE TABLE "Archivos" (
"id" INTEGER(11) PRIMARY KEY AUTOINCREMENT NOT NULL,
"objpadre" INTEGER(11) NOT NULL DEFAULT '0',
"ordencorto" INTEGER(11) DEFAULT '0',
"nombre" TEXT(64) NOT NULL DEFAULT '',
"extencion" TEXT(3) DEFAULT '',
"creado" TEXT(255) DEFAULT '0000-00-00',
"actualizado" TEXT(255),
CONSTRAINT "fk_Archivos_Contenido_1" FOREIGN KEY ("id") REFERENCES "Contenido" ("archivo")
);

CREATE TRIGGER
ON "Archivos"
FOR EACH ROW
;

CREATE TABLE "Items" (
"id" INTEGER(11) PRIMARY KEY AUTOINCREMENT NOT NULL,
"nombre" TEXT(32) NOT NULL DEFAULT '',
"objpadre" INTEGER(11) NOT NULL DEFAULT '0',
"usuario" INTEGER(11) NOT NULL DEFAULT '0',
"orden" TEXT(1) NOT NULL,
"fecha" TEXT(255) DEFAULT '0000-00-00',
"fecvaldesde" TEXT(255) NOT NULL DEFAULT '0000-00-00',
"fecvalhasta" TEXT(255) NOT NULL DEFAULT '0000-00-00',
"mostrar" TEXT(1) DEFAULT 'S',
"logeado" TEXT(1),
CONSTRAINT "fk_Items_Paginas_1" FOREIGN KEY ("id") REFERENCES "Paginas" ("item"),
CONSTRAINT "fk_Items_Contenido_1" FOREIGN KEY ("id") REFERENCES "Contenido" ("item")
);

CREATE INDEX "padre_idx" ON "Items" ("objpadre");

CREATE TABLE "Nivel" (
"id" INTEGER(11) NOT NULL,
"nombre" TEXT(32) NOT NULL,
PRIMARY KEY ("id") ,
CONSTRAINT "Nivel_Usuarios" FOREIGN KEY ("id") REFERENCES "Usuarios" ("nivel")
);

CREATE TABLE "Dominios" (
"id" INTEGER(11) NOT NULL,
"nombre" TEXT(32) NOT NULL,
PRIMARY KEY ("id") ,
CONSTRAINT "fk_Dominios_Usuarios_1" FOREIGN KEY ("id") REFERENCES "Usuarios" ("dominio")
);
