<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        //variables, debilmente tipado, sensible a la minusculas
        $entero=33; //entero
        $Entero=23; //variables diferentes
        $real=34.33;
        $cadena = "Feliz año nuevo";
        $anio = 2021;
        $cadena = "Feliz año $anio"; //la comillas dobles reconoce
        echo $cadena;
        $cadena = 'Feliz año $anio'; //las comillas simples no reconocen caracteres de escape
        echo "<br>";
        echo $cadena;
        $booleano = true;

        // tipado dinámico o flexible
        $edad = 3; //entero
        $edad = "tres"; // cambio de entero a string
        
        // variables de referencia, c y c++ se llaman punteros, assembler
        // los punteros se pueden usar para ordenar un array con algoritmo de burbuja
        $edad = 33;
        $referenciaEdad = &$edad;
        echo "<br>";
        echo $edad;
        $referenciaEdad = 44;
        echo "<br>";
        echo $edad;

        // cambiar el tipo, forzado o casteo
        $cadena = "333";
        settype($cadena, "integer"); // se transforma de cadena a entero
        $entero = (integer) $cadena;  // se transforma de cadena a entero

        //ambito de variables
        $varGlobal1="pedro";
        $varGlobal2="romina";
        function miFuncion() {
            $varLocal = "juan";
            echo "<br>";
            echo $varLocal;
            echo "<br>";
            //echo $varGlobal1;
            echo $GLOBALS["varGlobal1"];
            echo $GLOBALS["varGlobal2"];
        }
        miFuncion();

        //variables del sistema
        //phpinfo();
        echo "<br>";
        echo $_SERVER["DOCUMENT_ROOT"];
        echo "<br>";
        echo $_SERVER["SCRIPT_FILENAME"];

        //array con índice numérico automático
        $meses = [
            "enero",
            "febrero",
            "marzo"
        ];
        $long = count($meses);
        for ($i=0; $i < $long; $i++) { 
            echo "<br>";
            echo $meses[$i];
        }
        
        //array asociativos, par clave-valor
        $moneda = [
            "argentina" => "pesos",
            "francia" => "euros",
            "japón" => "yen"
        ];
        echo "<br>";
        echo $moneda["argentina"]; //pesos
        echo $moneda["japón"]; //yen
        foreach ($moneda as $value) {
            echo "<br>";
            echo $value;
        }

        // matrices o arrays multidimensionales
        $pais=[
            "argentina" => [
                "nombre"=>"República Argentina",
                "lengua"=>"Castellano",
                "moneda"=>"Pesos"
                ],
            "francia" => [
                "nombre"=>"Francia",
                "lengua"=>"Francés",
                "moneda"=>"Euro"
            ]
        ];
        echo "<br>";
        echo $pais["argentina"]["moneda"];
        echo "<br>";
        echo $pais["francia"]["lengua"];
        foreach ($pais as $value) {
            foreach ($value as $value1) {
                echo "<br>";
                echo $value;
                echo "<br>";
                echo $value1;
            }
            
        }


    ?>
</body>
</html>