<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado Alumnos</title>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

</head>
<body>
    <h3>Listado de Alumnos</h3>

    <table class="table">
        <thead class="table-dark">
            <tr>
                <th>#ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
            </tr>
        </thead>
        
        <tbody>
        <?php 
            $conn=new mysqli("localhost", "root", "", "alum22037");
            // $conn2=new mysqli("200.192.16.1", "root", "", "alum22028");

            $query=$conn->query("SELECT * FROM alumnos");

            while ($alumno=$query->fetch_assoc()) {
                $listAlumnos[]=$alumno;
            }

            //$listAlumnos[0][nombre] = "Juan";
            //$listAlumnos[0][apellido] = "Rodriguez";

            $cantFilas=count($listAlumnos);

            for ($i=0; $i < $cantFilas ; $i++) { 
                echo "<tr>";
                //id
                echo "<td>";
                echo $listAlumnos[$i]["id"];
                echo "</td>";

                //nombre
                echo "<td>";
                echo $listAlumnos[$i]["nombre"];
                echo "</td>";

                //apellido
                echo "<td>";
                echo $listAlumnos[$i]["apellido"];
                echo "</td>";

                //dni
                echo "<td>";
                echo $listAlumnos[$i]["dni"];
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