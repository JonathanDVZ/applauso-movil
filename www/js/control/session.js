function variableGLOBAL(){
	SERVERNODE ="http://localhost:3000";
}

window.onload = function(){
	//para tener acceso a los servidores se inicia esta funcion en caso de que indique q esta indefinida entonces se puede agregar de esta misma forma donde se necesite para poder tener acceso a las variables ejem: funciona como archivo de conexion.php hay q incluirlo si es necesario
	variableGLOBAL();
	
	if(getCookie('id_usuario')!="" && validar_sesion=="true" && getCookie('id_usuario')!=null && getCookie('id_usuario')!="null")
	{}else{
		if(validar_sesion=="true" || validar_sesion==null) 
		salir();
	}
}

function cerrarSesion(){
	$("#div_boton_ok").css("display","none");
	var html = '<div class="text-center">¿Seguro Que Desea Salir?</div>';
	html+='<div class="row">';
	html+='<div class="col-xs-6 text-left">';
	html+='<a onclick="salir(1)" class="btn btn-default">Salir</a>';
	html+='</div>';	
	html+='<div class="col-xs-6 text-right">';
	html+='<a onclick="salir(0)" class="btn btn-default">No</a>';
	html+='</div>';	

	$("#Modal_Alert_Body").html(html);
	$('#Modal_Alert').modal({
		show:true,
		backdrop:'static'
	});
}

function salir(n){	
	if(n==1){
		setCookie('id_usuario','',-1);
		setCookie('nomb_usu','',-1);
		setCookie('apel_usu','',-1);
		setCookie('corr_usu','',-1);
		setCookie('iden_usu','',-1);
		setCookie('imag_usu','',-1);
		setCookie('code_pai','',-1);
		setCookie('sexo_usu','',-1);
		setCookie('telf_usu','',-1);
		setCookie('tipo_usu','',-1);
		setCookie('pass_usu','',-1);
		setCookie('appl_usu','',-1);
		setCookie('mani_usu','',-1);
		setCookie('fech_nac_usu','',-1);
		setCookie('fech_reg_usu','',-1);
		setCookie('ciud_usu','',-1);
		setCookie('sald_usu','',-1);
		location.href='index.html';	
	}else{
		$("#Modal_Alert_Body").html('');
		$('#Modal_Alert').modal('hide');
	}
}