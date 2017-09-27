	 
	if(validar_sesion=="true")
	validar_sesion=validar_sesion;
	else
	var validar_sesion="";

	//ARCHIVOS REQUERIDOS
	document.write('<script src="js/control/document_ready.js"></script>');
	document.write('<script src="js/control/session.js"></script>');	 
	document.write('<script src="js/control/registro_login.js"></script>');
	document.write('<script src="js/control/usuario.js"></script>');

//FUNCION VALIDAR LETRAS
function letras(eve){

	key=eve.keyCode || eve.which;
	teclado=String.fromCharCode(key).toLowerCase();
	le=" abcdefghijklmñnopqrstuvwxyz";
	especiales="8-37-38-46-164";
	teclado_especial=false;

    for (var i in especiales) {
        if (key==especiales[i]) {
            teclado_especial=true;break;
        };
    };
    if (le.indexOf(teclado)==-1 && !teclado_especial) {
        return false;
    };
}
//FUNCION VALIDAR NUMEROS
function numeros(e){

    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numero="0123456789";
    especial="8-37-38-46";
    tecla_especial=false;

    for(var i in especial){
        if(key==especial[i]){
            tecla_especial=true;
        };
    };
    if(numero.indexOf(teclado)==-1 && !tecla_especial){
        return false;
    };
}
//FUNCION VALIDAR NUMEROS
function precios(e){

    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numero="0123456789.";
    especial="8-37-38-46";
    tecla_especial=false;

    for(var i in especial){
        if(key==especial[i]){
            tecla_especial=true;
        };
    };
    if(numero.indexOf(teclado)==-1 && !tecla_especial){
        return false;
    };
}

function validarNull(text){
	if(text==null){
		return ' ';
	}else{
		return text;		
	}
}
	 
function imgenpordefecto(){
	var img = "this.src ='img/user.png'";
	var erroryes = 'onerror="'+img+'"';
	return erroryes;
}

var ajax_timeout;
//enviar op=1 para mostrar cargando y img=1 para mostrar img cargando 
function modal_wait(html,op,img){
	if(op==1){
		if(img=="0")
		$("#img_ok").css("display","none");
		else
		$("#img_ok").css("display","inline-block");

		$("#Modal_Loading_Body").html(html);
		$('#Modal_Loading').modal('show');
		ajax_timeout = setTimeout(function(){ modal_wait('',0,0); }, 50000);
	}else{
		$("#img_ok").css("display","inline-block");
		$("#Modal_Loading_Body").html("");
		$('#Modal_Loading').modal('hide');
		 clearTimeout(ajax_timeout);
	}
}
//enviar op=1 para mostrar boton ok
function modal_alert(html,op){
		if(op=="0")
		$("#div_boton_ok").css("display","none");
		else
		$("#div_boton_ok").css("display","block");
			
		$("#Modal_Alert_Body").html(html);
		$('#Modal_Alert').modal('show');
}



 function validarEmail(email){
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	    // Se utiliza la funcion test() nativa de JavaScript
	var valor = regex.test(email.trim());
	if(valor==true){	
		return valor;
	}else{		
		return valor;
	}

}
 function calcular_edad(birthday) {    
			var year, month, day, age, year_diff, month_diff, day_diff;    
			var myBirthday = new Date();    
			var today = new Date();    
			var array = birthday.split("-");
			
		   year = array[0];    month = array[1];    day = array[2];
		   year_diff = today.getFullYear() - year;    
		   month_diff = (today.getMonth() + 1) - month;    
		   day_diff = today.getDate() - day;
		   
		   if (month_diff < 0) {        
			   year_diff--;    
			} else if ((month_diff === 0) && (day_diff < 0)) {        
				year_diff--;    
			}    
		return year_diff;
	   }
//------------------------------------COOKIES
function setCookie(nombre, valor, caducidad) {
	//Si no tenemos caducidad para la cookie, la definimos a 31 dias
	if(!caducidad)
		caducidad = 365
 
	var expireDate = new Date() //coge la fecha actual
	expireDate.setDate(expireDate.getDate()+caducidad);
 
	//crea la cookie: incluye el nombre, la caducidad y la ruta donde esta guardada
	//cada valor esta separado por ; y un espacio
	document.cookie = nombre + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";
}
function getCookie(nombre)
{
	/*
	 * document.cookie
	 * Contiene todas las cookies que estan al alcance de la paginas web en el formato:
	 * nombreCookie1=valor1; nombreCookie2=valor2
	 *
	 * document.cookie.length
	 * Contiene la longitud de la suma de todas las cookies
	 */
	if(document.cookie.length>0)
	{
		/*
		 * indexOf(caracter,desde) Devuelve la primera posicion que el caracter aparece
		 * devuelve -1 si no encuentra el caracter
		 */
		start=document.cookie.indexOf(nombre + "=");
		if (start!=-1)
		{
			//El inicio de la cookie, el nombre de la cookie mas les simbolo '='
			start=start + nombre.length+1;
			//Buscamos el final de la cookie (es el simbolo ';')
			end=document.cookie.indexOf(";",start);
			//Si no encontramos el simbolo del final ';', el final sera el final de la cookie.
			if (end==-1)
				end=document.cookie.length;
			//Devolvemos el contenido de la cookie.
			//substring(start,end) devuelve la cadena entre el valor mas bajo y
			//el mas alto, indiferentemente de la posicion.
			return unescape(document.cookie.substring(start,end));
		}
	}
	//no hemos encontrado la cookie
	return "";
}