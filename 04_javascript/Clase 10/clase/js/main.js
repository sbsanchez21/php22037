document.addEventListener("keypress", function(e) {
    // console.log("Ingreso al addeventlistener")
    // console.log(e.key)
    if (e.key == "Enter") {
        let inputs=document.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.display="none"
            
        }
    }
}
)
// se ejecuta onload cuando terminó de cargar toda la página
window.onload=function () {
    // simulamos datos traídos desde la base de datos
    let listAlumnos=[
        [143, "Jose", "Rodriguez", 25655445],
        [22, "Roxana", "Aizen", 32123321],
        [31, "Nicanor", "Paredes", 25666345],
        [42, "Jacinto", "Chiclana", 25666345],
        [5, "Santos", "Vega", 25666345],
        [6, "Enrique Santos", "Dicepolo", 25666345],
        [27, "Enrique Santos", "Dicepolo", 25666345],
        [8, "Carlos", "Vega", 25666345],
        [9, "Enrique Santos", "Dicepolo", 25666345],
        [10, "Enrique Santos", "Dicepolo", 366556546],
        [11, "Jose", "Antonio", 33555555],
        [12, "Marta", "Gonzalez", 34444455],
    ]

    var body=document.getElementsByTagName("body")[0]

    // tabla
    var table=document.createElement("table")
    table.setAttribute("class", "table table-striped ")
    // table.setAttribute("onclick", "alert('hola')")

    // encabezado
    var thead=document.createElement("thead")
    thead.setAttribute("class", "table-dark")
    var tr=document.createElement("tr")
    // id
    var th=document.createElement("th")
    var texto=document.createTextNode("#ID")
    th.appendChild(texto)
    tr.appendChild(th)
    // nombre
    th=document.createElement("th")
    texto=document.createTextNode("Nombre")
    th.appendChild(texto)
    tr.appendChild(th)
    // apellido
    th=document.createElement("th")
    texto=document.createTextNode("Apellido")
    th.appendChild(texto)
    tr.appendChild(th)    
    // dni
    th=document.createElement("th")
    texto=document.createTextNode("DNI")
    th.appendChild(texto)
    tr.appendChild(th)   
    // operaciones
    th=document.createElement("th")
    texto=document.createTextNode("")
    th.appendChild(texto)
    tr.appendChild(th)     

    thead.appendChild(tr)
    table.appendChild(thead)

    // tbody
    var tbody=document.createElement("tbody")

    // cuerpo de la tabla
    for (let i = 0; i < listAlumnos.length; i++) {
        var tr=document.createElement("tr")
        tr.setAttribute("id", `tr${i}`)

        // id
        var td=document.createElement("td")
        var texto=document.createTextNode(listAlumnos[i][0])
        td.appendChild(texto)
        tr.appendChild(td)

        // nombre
        var td=document.createElement("td")
        // txt nombre
        var div=document.createElement("div")
        div.setAttribute("id", `txtnom${i}`)
        div.setAttribute("onclick", `habilitarInput('nom${i}')`)
        var texto=document.createTextNode(listAlumnos[i][1])
        div.appendChild(texto)
        td.appendChild(div)
        // input nombre
        var div=document.createElement("div")
        var input=document.createElement("input")
        input.setAttribute(`type`,`text`)
        input.setAttribute(`name`,`nom${i}`)
        input.setAttribute(`id`,`nom${i}`)
        input.setAttribute(`class`,`form-control`)
        input.setAttribute(`style`,`display: none`)
        input.setAttribute(`onkeyup`,`updTexto('txtnom${i}', this.value)`)
        div.appendChild(input)
        td.appendChild(div)

        tr.appendChild(td)

        // apellido
        var td=document.createElement("td")
        // txt apellido
        var div=document.createElement("div")
        div.setAttribute("id", `txtape${i}`)
        div.setAttribute("onclick", `habilitarInput('ape${i}')`)
        var texto=document.createTextNode(listAlumnos[i][2])
        div.appendChild(texto)
        td.appendChild(div)
        // input apellido
        var div=document.createElement("div")
        var input=document.createElement("input")
        input.setAttribute(`type`,`text`)
        input.setAttribute(`name`,`ape${i}`)
        input.setAttribute(`id`,`ape${i}`)
        input.setAttribute(`class`,`form-control`)
        input.setAttribute(`style`,`display: none`)
        input.setAttribute(`onkeyup`,`updTexto('txtape${i}', this.value)`)
        div.appendChild(input)
        td.appendChild(div)

        tr.appendChild(td)

        // dni
        var td=document.createElement("td")
        // txt dni
        var div=document.createElement("div")
        div.setAttribute("id", `txtdni${i}`)
        div.setAttribute("onclick", `habilitarInput('dni${i}')`)
        var texto=document.createTextNode(listAlumnos[i][3])
        div.appendChild(texto)
        td.appendChild(div)
        // input dni
        var div=document.createElement("div")
        var input=document.createElement("input")
        input.setAttribute(`type`,`number`)
        input.setAttribute(`name`,`dni${i}`)
        input.setAttribute(`id`,`dni${i}`)
        input.setAttribute(`class`,`form-control`)
        input.setAttribute(`style`,`display: none`)
        input.setAttribute(`onkeyup`,`updTexto('txtdni${i}', this.value)`)
        div.appendChild(input)
        td.appendChild(div)

        tr.appendChild(td)       
        
        // operaciones
        var td=document.createElement("td")
        // botón editar
        var iTag=document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-pen m-1")
        iTag.setAttribute(`onclick`,`habilitarAll(${i})`)
        td.appendChild(iTag)
        // botón eliminar
        var iTag=document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-trash-can m-1")
        iTag.setAttribute("onclick", `eliminarFila('tr${i}')`)
        td.appendChild(iTag)
        tr.appendChild(td)          

        tbody.appendChild(tr)
    }

    table.appendChild(tbody)

    body.appendChild(table)
}

function eliminarFila(id) {
    document.getElementById(id).style.display="none"
}

function habilitarInput(id) {
    document.getElementById(id).style.display="block"
    document.getElementById(id).focus()
}

function updTexto(id,texto) {
    document.getElementById(id).innerHTML=texto
    
}

function habilitarAll(fila) {
    document.querySelector(`input#nom${fila}`).style.display="block"
    document.querySelector(`input#ape${fila}`).style.display="block"
    document.querySelector(`input#dni${fila}`).style.display="block"
    
}