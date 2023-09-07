GET: /api/mangas para ver buscar titulos por nombre y categoria		

	En la carpeta mangas de la carpeta controllers:	
		crear archivo read.js para el controlador necesario para ver todos los mangas ordenados alfabeticamente y paginados de a 4
		req.query.category recibe una o mas categorias para hacer un filtro por categoria (no olvidar aplicar split)
		req.query.title recibe una letra/silaba/palabra/frase para hacer un filtro por texto (no olvidar aplicar trim)
		req.query.page recibe el número de la página que se quiere ver
		proteger los datos que no se van a renderizar en la vista
		en la respuesta configurar las propiedades estandar y la propiedad mangas con todos los mangas encontrados
		en la respuesta configurar las prev y next para informarle al cliente si existe o no existe una página anterior/siguiente
    En el enrutador del recurso enrutar el controlador read con el método GET		