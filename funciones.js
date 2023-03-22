//validar formulario

function valida_envia(){
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.nombre.focus()
       return 0;
  }
  
  
  //valido el mail

var emailField = document.getElementById('email');
                
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if( validEmail.test(emailField.value) ){
 
}else{
  alert('Correo electronico invalido');
  return false;
}

  //valido la consulta
  if (document.fvalida.consulta.value.length==0){
    alert("Tiene que escribir su consulta")
    document.fvalida.nombre.focus()
    return 0;
}

  //el formulario se envia
  alert("Muchas gracias por enviar la consulta, le respondere a la brevedad");
  document.fvalida.submit();
}

