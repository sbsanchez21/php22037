<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $entero=3213;
        $edad=23;
        $edad="Juan Perez";
        $porAprobacion=85.5;
        $anio=2022;
        $mensaje="Felíz año $anio";
        echo $mensaje;
        $hoyLlueve=false;


        $edad="45";
        echo "<br>";
        echo $edad + "3";
        settype($edad, "integer");
        echo "<br>";
        echo $edad;

        // ambito de variables
        $variableGlobal = "pepe"; 
        $variableGlobal2 = "juan";
        //las funciones no se ejecutan por si solas, hay que invocarlas
        function mifuncion(){ 
            $variableLocal = "Roxana";
            
            echo "<br>"; 
            echo $variableLocal;
            echo "<br>"; 
            // echo $variableGlobal1;
            //estoy dentro de la función, para aceder a las variables utilizo $GLOBALS 
            echo $GLOBALS["variableGlobal"]; 
            echo "<br>"; 
            echo $GLOBALS["variableGlobal2"]; 
        }

        //esto llama y ejecuta la función
        mifuncion();


        // variables del sistema
        echo "<br>"; 
        // phpinfo();    
        // echo $_SERVER["HTTP_USER_AGENT"];
        echo "<br>"; 
        echo $_SERVER["HTTP_HOST"];
        echo "<br>"; 
        echo $_SERVER["SERVER_SOFTWARE"];


        $meses = ["enero","febrero","marzo","abril"];
        echo "<br>"; 
        echo $meses[3];
        $meses[0]="diciembre";

        //array asociativos
        $nroMes = ["enero"=>1, "febrero"=>2, "marzo"=>3];
        echo "<br>"; 
        echo $nroMes["enero"];

        //esto devuel el fetch_assoc() de listProfeDB.php
        $profe=["id"=>1,"nombre"=>"Roberto","apellido"=>"Rosental","dni"=>123213213,"email"=>"jperez@gmail.com"];
        echo "<br>"; 
        echo $profe["dni"];

        $listProfes[]=$profe;

        $profe=["id"=>2,"nombre"=>"Juan","apellido"=>"Rosental","dni"=>123213213,"email"=>"jperez@gmail.com"];
        $listProfes[]=$profe;

        $listProfes[] = [
            ["id"=>1,"nombre"=>"Roberto","apellido"=>"Rosental","dni"=>123213213,"email"=>"jperez@gmail.com"],
            ["id"=>2,"nombre"=>"Roberto","apellido"=>"Rosental","dni"=>123213213,"email"=>"jperez@gmail.com"],
            ["id"=>3,"nombre"=>"Roberto","apellido"=>"Rosental","dni"=>123213213,"email"=>"jperez@gmail.com"],
        ]


        





    
    ?>

    
</body>
</html>