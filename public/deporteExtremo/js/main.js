window.onload = function(){
	peticionAPI();	
	document.querySelector("article p:nth-of-type(1)").classList.add("d-none");
};


function peticionAPI(){
	// Crea un objeto
	let mensaje = new XMLHttpRequest();
	mensaje.open("GET","https://api.sheety.co/5c34824b-0097-4e84-b841-e38fb0fbe1cd");
	mensaje.send();
	mensaje.onload = function(){
		if(mensaje.status == 200){
			let noticias = JSON.parse(mensaje.response);
			renderizar(noticias)
		}				
	}
}

function renderizar(noticias){
	noticias.forEach(
		function(noticia){
			let articuloMatriz = document.querySelector("article.noticia");
			let articuloCopia = articuloMatriz.cloneNode(true);
			articuloCopia.querySelector("h3").innerText = noticia.titulo;
			articuloCopia.querySelector("img").src = noticia.imagen;
			articuloCopia.querySelector("a").innerText = noticia.autor;
			articuloCopia.querySelector("p:last-child").innerText = noticia.detalle;

			document.querySelector("#ultimas-noticias").appendChild(articuloCopia);
		}
	)
}


