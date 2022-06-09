<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer">

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="titulo">Listado Alumnos</div>

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
                $alumno[0][0]=23;
                $alumno[0][1]="José";
                $alumno[0][2]="Rodriguez";
                $alumno[0][3]=23222121;                                
                $alumno[1][0]=15;
                $alumno[1][1]="Josefina";
                $alumno[1][2]="Martinez";
                $alumno[1][3]=23222121;                                
                $alumno[2][0]=12;
                $alumno[2][1]="Raúl";
                $alumno[2][2]="Rodriguez";
                $alumno[2][3]=23222121;                                
                $alumno[3][0]=9;
                $alumno[3][1]="Romina";
                $alumno[3][2]="Rodriguez";
                $alumno[3][3]=23222121;                                

                $cantFilas=count($alumno);
                $cantCol=count($alumno[0]);

                for ($i=0 ; $i < $cantFilas ; $i++ ) { 
                    echo "<tr>";

                    for ($j=0; $j < $cantCol ; $j++) { 
                        echo "<td>";
                        echo $alumno[$i][$j];
                        echo "</td>";
                    }

                    echo "</tr>";
                }
            ?>
            
        </tbody>
    </table>
    




    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

</body>
</html>