// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#btnTodo").on('tap', function(){
		 $.ajax({
			  type: "POST",
			  url: "http://192.168.1.166/proyecto/buscartodas.php",
			  data: "",
			  error: function(){
				  alert("No se puede conectar al servidor");
				  },
		      success: function(respuesta)
			  {
				  alert(respuesta);
			   
				}
		 });
		 });
					 
		  
        
}); 										
});

			