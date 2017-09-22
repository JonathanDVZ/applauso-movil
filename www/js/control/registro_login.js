//crear variable de sesion ejemplo: setCookie('id_usuario','1',1);
function login(data){
	modal_wait('Autenticando...',1,1);
	$.ajax({
		url:SERVERNODE+'/usuario/login',
		type:'POST',
		data:data,
		success:function(d){
			modal_wait('',0,0);
			if(d.r==true){
				setCookie('id_usuario',d.code_usu,1);
				setCookie('nomb_usu',d.nomb_usu,1);
				setCookie('apel_usu',d.apel_usu,1);
				setCookie('corr_usu',d.corr_usu,1);
				setCookie('iden_usu',d.iden_usu,1);
				setCookie('imag_usu',d.imag_usu,1);
				setCookie('code_pai',d.code_pai,1);
				setCookie('sexo_usu',d.sexo_usu,1);
				setCookie('telf_usu',d.telf_usu,1);
				setCookie('tipo_usu',d.tipo_usu,1);
				setCookie('pass_usu',d.pass_usu,1);
				setCookie('appl_usu',d.appl_usu,1);
				setCookie('mani_usu',d.mani_usu,1);
				setCookie('fech_nac_usu',d.fech_nac_usu,1);
				setCookie('fech_reg_usu',d.fech_reg_usu,1);
				setCookie('ciud_usu',d.ciud_usu,1);
				setCookie('sald_usu',d.sald_usu,1);
				location.href = '9home_opc.html';
			}else{
				modal_alert(d.msj,1);
			}
			console.log(d);
		}
	});
}

function registro(data){
	$.ajax({
		url:SERVERNODE+'/usuario/registro',
		type:'POST',
		data:data,
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
			console.log(d);
		}
	})
}