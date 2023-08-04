const ButtonAgregar = document.querySelector("#Agregar")

const CambiarColor = function (event){
    const Elemento = event.target
    if (Elemento.className === "recuadro") {
        Elemento.className = "recuadroAzul"
    }
    else {
        Elemento.className = "recuadro"
    }
}

const Click = function(){
    const Contenedor = document.querySelector("#Contenedor")
    const NewDiv = document.createElement("div")
    NewDiv.innerText = " Holi, Putitos! Vayan a tomar"
    NewDiv.className = "recuadro"
    NewDiv.addEventListener("click", CambiarColor)

    Contenedor.appendChild(NewDiv)
}

ButtonAgregar.addEventListener("click", Click)
