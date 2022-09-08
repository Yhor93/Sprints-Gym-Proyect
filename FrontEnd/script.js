//alert("AIUUUUDaaaaa");
document.write("AiiuuDaDa");
document.getElementById('txt').innerHTML="Referencia hacia el Div  \"id\"";

//////

var nombre1 = document.getElementById('usuario');
var contraseña = document.getElementById('Contraseña');
var error = document.getElementById('error');
error.style.color='red';
error.style.fontSize=20;


function validar(){
    var mensajesError = [];
    if(usuario.value == null || usuario.value == ''){
        mensajesError.push('Favor complete los datos de Ingreso')
    }
    if(contraseña.value == null || contraseña.value == ''){
        mensajesError.push('Favor complete los datos de Ingreso')
    }
    error.innerHTML = mensajesError.join(', ');
    
    return false
    }

