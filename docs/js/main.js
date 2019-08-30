window.onload = function(){
	peticionAPI();	
	document.querySelector("article:nth-of-type(1)").classList.add("d-none");
};


function peticionAPI(){
	// Crea un objeto
	let mensaje = new XMLHttpRequest();
	mensaje.open("GET","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.clarin.com%2Frss%2Fdeportes%2Ffutbol%2F");
	mensaje.send();
	mensaje.onload = function(){
		if(mensaje.status == 200){
			let noticias = JSON.parse(mensaje.response);
			renderizar(noticias)
		}				
	}
}

function renderizar(noticias){
	noticias.items.forEach(
		function(noticia){
			let articuloMatriz = document.querySelector("article.noticia");
			let articuloCopia = articuloMatriz.cloneNode(true);
			articuloCopia.classList.remove("d-none");
			articuloCopia.querySelector("h3").innerText = noticia.title;
			articuloCopia.querySelector("img").src = noticia.enclosure.link;
			articuloCopia.querySelector("a").innerText = noticia.author;
			articuloCopia.querySelector("p:last-child").innerText = noticia.description;
			

			document.querySelector("#ultimas-noticias").appendChild(articuloCopia);			
		}
	)
}


