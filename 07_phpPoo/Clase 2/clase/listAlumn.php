<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

</head>
<body>
    <h5>Listado de Alumnos PHP</h5>

    <table class="table">
        <thead class="table-dark">
            <tr>
                <th>#ID</th>
                <th>Nombre</th>
            </tr>
        </thead>
        
        <tbody>
        <?php 
            //en próximas clases nos conectarémos a una DB
            // y traerémos los datos de los almnos
            $alumno[0]="Pedro";
            $alumno[1]="Juan";
            $alumno[2]="Romina";
            $alumno[3]="Sandra";
            $alumno[4]="Ceferino";

            $longArray=count($alumno);
            for ($i=0; $i < $longArray ; $i++) { 
                echo "<tr>";
                //columna id
                echo "<td>";
                echo $i;
                echo "</td>";
                //columna nombre
                echo "<td>";
                echo $alumno[$i];
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