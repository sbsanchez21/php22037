<?php 
class UsuarioDAOC {

    public function validarUsuYPass($usu, $pass) {
        require_once("../dataBase/ConexionDB.php");

        $conexionDB = new ConexionDB("localhost","root", "", "cacproyecto");
        $conexionDB->conectar();

        $sql ="SELECT * FROM usuarios WHERE usuario = '$usu' AND clave='$pass'";
        $conexionDB->ejecutar($sql);

        $existeUsuYPass = $conexionDB->cantFilas() > 0;
        if ($existeUsuYPass) {
            return true;
        } else {
            return false;
        }
        
    }

    public function guardarUsuario($usu, $pass) {
        require_once("../dataBase/ConexionDB.php");

        $conexionDB = new ConexionDB("localhost","root", "", "cacproyecto");
        $conexionDB->conectar();

        $sql="INSERT INTO usuarios( `usuario`, `clave`) VALUES ('$usu','$pass')";

        $conexionDB->ejecutar($sql);

        return $conexionDB->cantFilas() > 0;
    }

    public function listarUsuarios() {
        require_once("../dataBase/ConexionDB.php");

        $conexionDB = new ConexionDB("localhost","root", "", "cacproyecto");
        $conexionDB->conectar();

        $sql="SELECT * FROM usuarios";
        $result = $conexionDB->ejecutar($sql);

        while ($usu = $result->fetch_assoc()) {
            $listaUsu[] = $usu;
        }

        return $listaUsu;    
    }

}

?>