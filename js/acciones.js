// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#btnTodo").on('tap', function(){
		alert("dentro");
		  $.ajax({
			  type: "POST",
			  url: "http://192.168.1.163/proyecto/buscartodas.php",
			  error: function(){
				  alert("No se puede conectar al servidor")
				  },
				  success: function(respuesta){
					   alert(respuesta);
					  }
		  });
		
		});
}); 
});

