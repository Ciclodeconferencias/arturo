<?php
include "cn.php";
//Recibir los datos y almacenarlos en variables
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$correo = $_POST["correo"];
$usuarios = $_POST["usuarios"];
$clave = $_POST["clave"];
$telefono = $_POST["telefono"];
//Consulta para insertar
$insertar = "INSETR INTO usuarios(nombre, apellidos, correo, usuarios, clave, telefono)
VALUES ('$nombre' , '$apellidos' , '$correo' , '$usuarios' , '$clave' , '$telefono')";
//Ejecutar consola
$resultado = MySQL_query($conexion, $insertar);
 if (!$resultado){
	 echo 'Error al registrarse';
  }  else{
	  echo'Usuario registrado existosamente';
  }
  
   //Cerrar conexion
   MySQL_close($conexion);
 