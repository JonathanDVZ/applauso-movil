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

function aggTarjeta(datos){
	modal_wait('Procesando...',1,1);
	$.ajax({
		url:SERVERNODE+'/usuario/agregar_tarjeta',
		type:'POST',
		data:datos+'&cod_u='+getCookie('id_usuario'),
		crossDomain:true,
		cache:false,
		success:function(d){
			modal_wait('',0,0);
			console.log(d);
			if(d.r==true){
				modal_alert('Tarjeta Agregada',1);
				$('#formTar')[0].reset();
			}else{
				modal_alert(d.msj,1);
			}
		}
	});
}

function obtenerTarjetas(){
	$.ajax({
		url:SERVERNODE+'/usuario/obtener-tarjetas?cod_usu='+getCookie('id_usuario')+'',
		type:'GET',
		crossDomain:true,
		cache:false,
		success:function(d){
			console.log(d);
			var html = '';
			if(d.r==true){
				for(var i = d.data.length-1; i >= 0; i--){
					var nro = d.data[i].nume_tar;
					 var n = nro.split(' ');
					html+='<li class="list-group-item">';
						html+='<a href="aggTarjeta.html?code_tar='+d.data[i].code_tar+'" style="color:#333;">';
							html+='<img src="img/Recursos-63.png">';
							html+='<span class="fa fa-asterisk"></span>';
							html+='<span class="fa fa-asterisk"></span>';
							html+='<span class="fa fa-asterisk"></span>';
							html+='<span class="fa fa-asterisk"></span>';
							html+=' <span>'+n[3]+'</span>';
						html+='</a>';
						html+=' <a onclick="eleTarjeta('+d.data[i].code_tar+')"><span style="color:#ce2a2a;" class="fa fa-trash fa-lg"></span></a>';
					html+='</li>';
				}
				$('.lista_tarjetas').append(html);
			}else{
				html+='<li class="list-group-item">';
					html+='<b>Aun no Añades una Tarjeta</b>';
				html+='</li>';
				$('.lista_tarjetas').append(html);
			}
		}
	});
}

function eleTarjeta(cod_tar){
	var msj = confirm('¿Seguro Que Desea Eliminar?');
	if(msj==true){
		modal_wait('Procesando...',1,1);
		$.ajax({
			url:SERVERNODE+'/usuario/eliminar-tarjeta?cod_tar='+cod_tar,
			type:'POST',
			crossDomain:true,
			cache:false,
			success:function(d){
				modal_wait('',0,0);
				console.log(d);
				if(d.r==true){
					modal_alert(d.msj,1);
					setTimeout(function(){location.href = 'pagos.html';},2000);
				}else{
					modal_alert('No se Elimino',1);
				}
			}
		});
	}
}

function obTarjeta(code_tar){
	$.ajax({
		url:SERVERNODE+'/usuario/obtener-tarjeta?code_tar='+code_tar,
		type:'GET',
		crossDomain:true,
		cache:false,
		success:function(d){
			console.log(d);
			$('#cod').val(d.data[0].code_tar);
			$('#num').val(d.data[0].nume_tar);
			$('#ven').val(d.data[0].venc_tar);
			$('#cvv').val(d.data[0].cvv_tar);
			$('#nom').val(d.data[0].nomb_tar);
			
			if(d.data[0].tipo_tar=='C'){
				$('#tipC').attr('selected','true');
				$('#tipD').removeAttr('selected');
			}else{
				$('#tipD').attr('selected','true');
				$('#tipC').removeAttr('selected');
			}
		}
	})
}

function editTarjeta(datos){
	modal_wait('Procesando...',1,1);
	$.ajax({
		url:SERVERNODE+'/usuario/editar_tarjeta',
		type:'POST',
		data:datos,
		crossDomain:true,
		cache:false,
		success:function(d){
			modal_wait('',0,0);
			console.log(d);
			if(d.r==true){
				// modal_alert('Registro Editado',1);
				$('#formTar')[0].reset();
			}else{
				modal_alert(d.msj,1);
			}
		}
	});
}