/*
Formas de integrar un Script a HTML
1) Archivo Externo: <script src="js/archivo.js"></script>
2) Bloque Interno: <script></script>
3) Atributo HTML: onclick, onchange, onblur...
*/
window.onload = function(){
	persona = {
		nombre: "Martín",
		edad: 40,
		peso: 95,
		altura: 1.82,
		comidas_preferidas:['milanesa','pizza','zapallito relleno'],
		quejarse: function(){
			alert('Uy!... que pesado estoy')	
		},
	}
	perro = {
		nombre: "Fido",
		peso: 20,
		dueño: "Martín",
		ladrido: function(){
			if(this.peso > 30){
				alert("Guau")
			}else{
				alert("Está flaco")
			}
		},
		dieta: function(){
			this.peso = this.peso - 1;
		},
		comer: function(){
			this.peso = this.peso + 1;
		}
	}
	let texto = '[{"nombre":"Martín","edad":40,"peso":95,"altura":1.82,"comidas_preferidas":["milanga","pizza","zapallito relleno"]},{"nombre":"Joel","edad":30,"peso":95,"altura":1.82,"comidas_preferidas":["arepas","tequeño"]},{"nombre":"Jose","edad":31,"peso":80,"altura":1.72,"comidas_preferidas":["asado","repas","pastas"]}]'
	let los_pibes = JSON.parse(texto);
	console.log(los_pibes);
};
