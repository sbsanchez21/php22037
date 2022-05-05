console.log(document)
console.log(document.URL)

// let edad = prompt("Ingrese su edad")

// if (edad > 50) {
//     document.getElementById("textoBienv").innerHTML="Bievenidos a mi página señores"
// }



function mostrarNoticia() {

    document.getElementById("noticia").innerHTML="Hoy se incendió un edificio en CABA"

    let gravedadNoticia="media" //info traída de la DB

    if (gravedadNoticia=="baja") {
        document.getElementById("noticia").style.backgroundColor="blue"
    } else if(gravedadNoticia=="media") {
        document.getElementById("noticia").style.backgroundColor="lightcoral"
    } else if(gravedadNoticia=="alta") {
        document.getElementById("noticia").style.backgroundColor="red"
    }


}

// métodos de JS que utilizan DOM
// let ok=confirm("Desea ver recetas de cocina?")
// if (ok) {
//     console.log("ingreso")
//     document.body.appendChild("<div>Cómo hacer flan <br>  - Huevos <br> - Leche <br>     - Azucar </div>")    
// }


document.getElementsByTagName("div")
document.getElementsByClassName("texto")



/** EVENTOS 
    suceso que ocurre en la ventada del navegador
*/
function resaltar() {
    document.getElementById("texto").style.backgroundColor="red"
}

let texto = document.getElementById("texto")
console.log(texto)
texto.onmouseleave = function () {
    document.getElementById("texto").style.backgroundColor="lightgray"
}


let adulto=true //info de la db
// let adulto=confirm("Es adulto?")
if (adulto) {
    document.getElementById("notiAdulto").style.display="block"
} else {
    document.getElementById("notiAdulto").style.display="none"
    
}