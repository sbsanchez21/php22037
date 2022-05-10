const valorTicket=200

function calcularTotal() {
    let cant=document.getElementById("cant").value 

    let categoria=document.getElementById("categoria").value 
    let descuento;
    if (categoria==1) {
        descuento=80
    } else if (categoria==2) {
        descuento=50
    } else {
        descuento=15
    }

    
    let total=cant*valorTicket
    
    total-= total*descuento/100

    document.getElementById("total").innerHTML=total
}

function editarAcercaDe() {
    document.getElementById("acercaDe").style.display="block"
    
}

function updTxtAcercaDe(texto) {
    document.getElementById("txtAcercaDe").innerHTML=texto
}