function resaltar() {
    document.getElementById("titulo").style.backgroundColor="red";
}

function opacar() {
    document.getElementById("titulo").style.backgroundColor="lightgray";
}

function habilitarInput() {
    document.getElementById("inputNombre").style.display = "block";
}

function modificarNombre(valor) {
    console.log("ingreso onchange");
    document.getElementById("nombre").value = valor;
}