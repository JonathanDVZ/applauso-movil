
function variableGLOBAL(){
	 
	 SERVERNODE ="http://localhost:3000";
	
	 
	}

  
window.onload = function(){
	//para tener acceso a los servidores se inicia esta funcion en caso de que indique q esta indefinida entonces se puede agregar de esta misma forma donde se necesite para poder tener acceso a las variables ejem: funciona como archivo de conexion.php hay q incluirlo si es necesario
	variableGLOBAL();
	
	 
	 
	
	if(getCookie('id_usuario')!="" && validar_sesion=="true" && getCookie('id_usuario')!=null && getCookie('id_usuario')!="null")
	{
	
	 
	}else{
		
		 if(validar_sesion=="true" || validar_sesion==null) 
		 salir();
		 
		}
		 
		 }

 


function salir(){
	setCookie('id_usuario','',-1);
	 
	location.href='index.html';
	
	
	}
