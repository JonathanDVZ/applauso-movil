function editarDatos(data){
	modal_wait('Actualizando...',1,1);
	$.ajax({
		url:SERVERNODE+'/usuario/editar',
		type:'POST',
		data:data+'&cod='+getCookie('id_usuario'),
		crossDomain:true,
		cache:false,
		success:function(d){
			modal_wait('',0,0);
			// console.log(d);
			if(d.r==true){
				modal_alert('Datos Actualizados',1);
				$("#nomape_usu").text(d.nomb_usu+' '+d.apel_usu);
			}else{
				modal_alert(d.msj,1);
			}
		}
	})
}

function cambiarPass(data){
	modal_wait('Actualizando...',1,1);
	$.ajax({
		url:SERVERNODE+'/usuario/editar_pass',
		type:'POST',
		data:data+'&cod='+getCookie('id_usuario'),
		crossDomain:true,
		cache:false,
		success:function(d){
			modal_wait('',0,0);
			// console.log(d);
			if(d.r==true){
				modal_alert(d.msj,1);
				$('#formEdit')[0].reset();
			}else{
				modal_alert(d.msj,1);
			}
		}
	})
}

function cambiarImg(data){
	console.log(data);	
}