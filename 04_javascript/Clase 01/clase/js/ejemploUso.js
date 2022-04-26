

function sumar() {
    var a = document.getElementById("a").value; //obtiene el valor ingresado por el usuario en el primer input
    var b = document.getElementById("b").value; //obtiene el valor ingresado por el usuario en el segundo input

    var result = parseFloat(a) + parseFloat(b); //suma los valores
    // document.getElementById('resultado').innerHTML= parseFloat(a) + ' más ' + parseFloat(b) + ' es igual: ' + resultado;
    document.getElementById("resultado").innerHTML  = result; //pone el resultado en el div resultado
}

function restar() {
    console.log("ingresé a la función restar");
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var result =  c - d;
    console.log(c);
    console.log(d);
    console.log(result);
    document.getElementById("resultResta").innerHTML = `<br><p style='color:red;'>La suma de ${c} + ${d} = ${result} </p>`;
    // document.getElementById("resultResta").innerHTML  = result; //pone el resultado en el div resultado
}