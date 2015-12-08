// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#btnTodo").on('tap', function(){
		 $.ajax({
			  type: "POST",
			  url: "http://192.168.1.127/proyecto/buscartodas.php",
			  data: "",
			  error: function(){
				  alert("No se puede conectar al servidor");
				  },
		      success: function(respuesta)
			  {
				  var producto =JSON.parse(respuesta);
				  
			   $('#contenido').empty();
			   
			   
			   
			   for(var $x=0; $x<producto.peliculas.length;$x++)
			   
			   {
				   
				   $('#contenido').append('<div><div>Nombre de la Película:'+ producto.peliculas[$x].nombrePelicula +'</div><div><div style="float:left; width:30%;"><img src="http://192.168.1.127/proyecto/recursos/imagenes/fotos/'+ producto.peliculas[$x].clavePelicula +'.jpg"></div><div style="float:left; width:70%;"><div><div style="float:left; width:50%;">Clasificación:'+ producto.peliculas[$x].clasificacion +'</div><div style="float:left; width:50%;">Género:'+ producto.peliculas[$x].genero +'</div></div><div style="clear:both;"><div style="float:left; width:50%;">Idioma:'+ producto.peliculas[$x].idioma +'</div><div style="float:left; width:50%;">Duración:'+ producto.peliculas[$x].duracion +'</div></div><div style="clear:both;">Director:'+ producto.peliculas[$x].director +'</div></div></div><div style="clear:both;">Sinópsis:'+ producto.peliculas[$x].sinopsis +'</div></div>');
				   }
			   $(':mobile-pagecontainer').pagecontainer('change','#todas',{
				transition:'pop'
				});
				}
		 });
		 });
					 
		  
        
}); 										
});

			