<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado Alumnos</title>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <div class="titulo">Listado de Profesores</div>

    <table class="table">
        <thead class="table-dark">
            <tr>
                <th>#ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
        <?php 
            //se conecta al servidor mysql de mi pc a la db alum22037
            $mysqli=new mysqli("localhost","root","","alum22037");

            //ejecuta una sentencia sql
            $query=$mysqli->query("SELECT * FROM profesores ORDER BY apellido");

            //recorro el resultado en query y lo transformo en un array
            //$profe=[id=1, nombre="Roberto", apellido="Somosa"]
            // var_dump($query);
            while ($profe=$query->fetch_assoc()) {
                //agrega el array $profe a una lista de array llamad $listProfes
                $listProfes[]=$profe;
            }
            var_dump($listProfes);
            
            //$listProfes[0] == [1, "Roberto", "Somosa"]
            //$listProfes[1] == [2, "Roberto", "Somosa"]

            $cantProfes=count($listProfes);
            for ($i=0; $i < $cantProfes ; $i++) { 
                echo "<tr>";

                echo "<td>";
                echo $listProfes[$i]["id"];
                echo "</td>";
                echo "<td>";
                echo $listProfes[$i]["nombre"];
                echo "</td>";
                echo "<td>";
                echo $listProfes[$i]["apellido"];
                echo "</td>";
                echo "<td>";
                echo $listProfes[$i]["email"];
                echo "</td>";


                echo "</tr>";

            }

        
        ?>
        </tbody>

    </table>


    <!-- bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>