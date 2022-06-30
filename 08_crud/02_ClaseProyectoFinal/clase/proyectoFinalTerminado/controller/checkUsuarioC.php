<?php 
$usu=$_POST["usuario"];
$pass=$_POST["password"];

require_once("../dao/UsuarioDAOC.php");

$usuarioDAO = new UsuarioDAOC();
$guardoOk = $usuarioDAO->guardarUsuario($usu, $pass);

if ($guardoOk) {
    echo "se guardo ok";
} else {
    echo "error al guardar guardo ok";
}


?>