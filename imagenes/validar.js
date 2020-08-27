function validar(){
	var nombre, apellidos, correos, usuarios, clave, telefono, expresion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	correos = document.getElementById("coreeo").value;
	usuarios = document.getElementById("usuarios").value;
	clave = document.getElementById("clave").value;
	telefono = document.getElementById("telefono").value;
   
expresion = /\w+@\.+[a-z]/;

texto123@gmail.com	 
if(nombre ==="" || apellidos ==="" || correo ==="" || usuarios ==="" || clave ==="" || telefono ===""){	
		 alert("Todos los campos son obligatorios");
		 return false;
	 }
	 else if(nombre.length>30){
		 alert("El nombre es muy largo");
		 return false;
		 
	 else if(apellidos.length>80){
		 alert("los apellidos son muy largo");
		 return false;
}

    
	  else if(correo.length>100){
		 alert("El correo es muy largo");
		 return false;
}

       else if(usuario.length>15){
		 alert("El usuario es muy largo");
		 return false;
	 }
	 
	   else if(clave.length>20){
		 alert("La clave  es muy larga");
		 return false;
}
        else if(telefono.length>10){
		 alert("El telefono es muy largo");
		 return false;
}
 else if(isNaN(telefono)){
	 alert("El telefono ingresado no es un numero");
		 return false;
		 
}
        
}