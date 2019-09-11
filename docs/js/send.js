window.onload = function(){
	let formulario = document.querySelector("#form");
	formulario.onsubmit = function(e){
		e.preventDefault();
		enviarFormulario(this);
	}	
}


function enviarFormulario(formulario){
	let datos = JSON.stringify($(formulario).serializeObject())
	console.log(datos)

	var request = new XMLHttpRequest();
	request.open('post', 'http://localhost:3000/umpalumpaServices');
	request.send(datos);

	request.onload = function(){
		if(request.status == 200){
			console.log("Mensaje enviado");
		}else if(request.status == 404)	{
			console.log("Hubo un error en el envío")
		}else{
			console.log("Hubo un error del lado del servidor")
		}
	}
}

$.fn.serializeObject = function() {
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};