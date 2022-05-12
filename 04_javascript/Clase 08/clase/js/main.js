document.addEventListener("keypress", function(e) {
    // console.log("Ingreso al addeventlistener")
    // console.log(e.key)
    let inputs=document.getElementsByTagName("input")
    if (e.key == "Enter") {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.display="none"
            
        }
    }
}
)

/**
 * Función que habilita el input correspondiente
 * al texto clickeado
 * @param {*} id recibe el id del input a habilitar
 */
function habilitarInput(id) {
    document.getElementById(id).style.display="block"
    document.getElementById(id).focus()
    
}

// function habilitarInput(id, idtxt) {
//     document.getElementById(id).style.display="block"
//     document.getElementById(id).focus()

//     document.getElementById(idtxt).style.display="none"
// }

function updTexto(id, texto) {
    document.getElementById(id).innerHTML=texto
}

function habilitarAll(fila) {
    // document.querySelector("input#nom" + fila).style.display="block"
    document.querySelector(`input#nom${fila}`).style.display="block"
    document.querySelector(`input#ape${fila}`).style.display="block"
    document.querySelector(`input#dni${fila}`).style.display="block"
    // document.querySelector(`div#txtdni1`)
}

function eliminarFila(id) {
    document.getElementById(id).style.display="none"
}