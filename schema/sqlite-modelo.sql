create table submenu (id integer ,
						nombre TEXT ,
						ruta	TEXT,
						pagina INTEGER FOREIGN KEY REFERENCES paginas(id) ON UPDATE CASCADE)
						 