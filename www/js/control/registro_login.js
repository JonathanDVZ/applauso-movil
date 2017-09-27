variableGLOBAL();
function login(data){
	modal_wait('Autenticando...',1,1);
	$.ajax({
		url:SERVERNODE+'/usuario/login',
		type:'POST',
		data:data,
		crossDomain:true,
		cache:false,
		success:function(d){
			modal_wait('',0,0);
			if(d.r==true){
				setCookie('id_usuario',validarNull(d.code_usu),1);
				setCookie('nomb_usu',validarNull(d.nomb_usu),1);
				setCookie('apel_usu',validarNull(d.apel_usu),1);
				setCookie('corr_usu',validarNull(d.corr_usu),1);
				setCookie('iden_usu',validarNull(d.iden_usu),1);
				setCookie('imag_usu',validarNull(d.imag_usu),1);
				setCookie('code_pai',validarNull(d.code_pai),1);
				setCookie('sexo_usu',validarNull(d.sexo_usu),1);
				setCookie('telf_usu',validarNull(d.telf_usu),1);
				setCookie('tipo_usu',validarNull(d.tipo_usu),1);
				setCookie('pass_usu',validarNull(d.pass_usu),1);
				setCookie('appl_usu',validarNull(d.appl_usu),1);
				setCookie('mani_usu',validarNull(d.mani_usu),1);
				setCookie('fech_nac_usu',validarNull(d.fech_nac_usu),1);
				setCookie('fech_reg_usu',validarNull(d.fech_reg_usu),1);
				setCookie('ciud_usu',validarNull(d.ciud_usu),1);
				setCookie('sald_usu',validarNull(d.sald_usu),1);
				location.href = '9home_opc.html';
			}else{
				modal_alert(d.msj,1);
			}
			// console.log(d);
		}
	});
}

function registro(data){
	$.ajax({
		url:SERVERNODE+'/usuario/registro',
		type:'POST',
		data:data,
		crossDomain:true,
		cache:false,
		beforeSend:function(){modal_wait('Enviando...',1,1);},
		success:function(d){
			modal_wait('',0,0);
			if(d.r==true){
				var html = '<div style="font-size:1.2em;">Registro Verificado Ya Puedes <a style="text-decoration:none;color:#333;" href="7login.html">Entrar</a> en Applauso</div>';
				modal_alert(html,0);
				setTimeout(function(){location.href = '7login.html'},20000);
			}else{
				modal_alert(d.msj,1);
			}
			// console.log(d);
		}
	})
}

function datosPerfil(){
	$.ajax({
		url:SERVERNODE+'/usuario/obtener-usuario',
		type:'GET',
		data:'code_usu='+getCookie('id_usuario'),
		crossDomain:true,
		cache:false,
		success:function(d){
			// console.log(d);
			$("#nomape_usu").text(d.data.nomb_usu+' '+d.data.apel_usu);
			
			if(d.data.sald_usu != null){
				$("#sald_usu").text('$ '+d.data.sald_usu);
			}
			if(d.data.appl_usu != null){	
				$("#appl_usu").text(d.data.appl_usu);
			}
			if(d.data.imag_usu!='http://localhost/'){
				$("#img_usu").attr('src',''+d.data.imag_usu+'');
			}else{
				$("#img_usu").attr('src','img/recursos etapa 1-27.png');
			}

			$("#nom_usu").text(d.data.nomb_usu);
			$("#ape_usu").text(d.data.apel_usu);
			if(d.data.fech_nac_usu != null){
				var s1 = d.data.fech_nac_usu.split('T04');
				var fec = s1[0];
				$("#fec_nac").text(fec);
			}
			if(d.data.iden_usu != null){
				$("#doc_ide").text(d.data.iden_usu);
			}
			if(d.data.ciud_usu!=null){
				$("#ciu_usu").text(d.data.ciud_usu);
			}
			
			if(d.data.sexo_usu != null){
				if(d.data.sexo_usu=='m' || d.data.sexo_usu=='M'){
					$("#sex_usu").text('Masculino');
				}else{
					$("#sex_usu").text('Femenino');
				}
			}			
		}
	});	
}

function obtenerDatos(){
	$.ajax({
		url:SERVERNODE+'/usuario/obtener-usuario',
		type:'GET',
		data:'code_usu='+getCookie('id_usuario'),
		crossDomain:true,
		cache:false,
		success:function(d){
			// console.log(d);
			$('#nom').val(d.data.nomb_usu);
			$('#ape').val(d.data.apel_usu);
			$('#cor').val(d.data.corr_usu);
			$('#tlf').val(d.data.telf_usu);
			if(d.data.fech_nac_usu != null){
			var s1 = d.data.fech_nac_usu.split('T04');
			var fec = s1[0];
			$('#fec').val(fec);
			}
			$('#idu').val(d.data.iden_usu);
			$('#code_pai').val(d.data.code_pai);
			$('#ciu').val(d.data.ciud_usu);
			
			var sexo = d.data.sexo_usu;
			if(sexo=='F' || sexo=='f'){
				$('#sexF').attr('selected','true');
				$('#sexM').removeAttr('selected');
			}else if(sexo=='M' || sexo=='m'){
				$('#sexM').attr('selected','true');
				$('#sexF').removeAttr('selected');
			}else{
				$('#sexM').removeAttr('selected');
				$('#sexF').removeAttr('selected');
			}
		}
	});
}

function obtnerPaises(){
	$.ajax({
		url:SERVERNODE+'/usuario/obtener-paises',
		type:'GET',
		crossDomain:true,
		cache:false,
		success:function(d){
			// console.log(d);
			var html = '';
			var code_pai = $('#code_pai').val();
			for (var i=0;i<=99;i++){
				if(code_pai == d.data[i].id_pais){
					html+='<option id="cod_pai" value="'+d.data[i].id_pais+'" selected>'+d.data[i].iso+' '+d.data[i].pais+'</option>';
				}else{
					html+='<option id="cod_pai" value="'+d.data[i].id_pais+'">'+d.data[i].iso+' '+d.data[i].pais+'</option>';
				}
			}
	        for (var i=100;i<=199;i++){
	        	if(code_pai == d.data[i].id_pais){
					html+='<option id="cod_pai" value="'+d.data[i].id_pais+'" selected>'+d.data[i].iso+' '+d.data[i].pais+'</option>';
				}else{
					html+='<option id="cod_pai" value="'+d.data[i].id_pais+'">'+d.data[i].iso+' '+d.data[i].pais+'</option>';
				}
	        }
	        for(var i=200;i<=239;i++){
	        	if(code_pai == d.data[i].id_pais){
					html+='<option id="cod_pai" value="'+d.data[i].id_pais+'" selected>'+d.data[i].iso+' '+d.data[i].pais+'</option>';
				}else{
					html+='<option id="cod_pai" value="'+d.data[i].id_pais+'">'+d.data[i].iso+' '+d.data[i].pais+'</option>';
				}
	        }
			$('#pai').append(html);
		}
	});
}