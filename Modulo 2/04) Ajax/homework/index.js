// Constante para la URL
const url = "http://localhost:5000/amigos";
// Se llama al Boton de Ver Amigos
const [boton] = $("#boton");
// Se llama al Boton para Buscar amigos
const [search] = $("#search");
// Se llama al Boton para Borrar amigos
const [deleteA] = $("#delete")

// La funcion que permite crear la lista con el nombre de los amigos
const listFriends = (respuesta) => {
    // Se llama a lista
    const [lista] = $("#lista");
    lista.innerText = " ";
    // Se recorre a cada amigo
    respuesta.forEach(friend => {
        // Se crea una nueva Li
        const newLi = document.createElement("li");
        // Se le agrega a esa nueva Li el nombre de cada amigo
        newLi.innerText = friend.name;
        // Se ereda a lista las nuevas Li
        lista.appendChild(newLi);
    });
}

const buscarAmigo = (respuesta) => {
    const [amigo] = $("#amigo");
    amigo.innerText = respuesta.name
}

// Esta es la funcion que se ejecuta al hacer click
// Se coloca de donde vamos a sacar los elementos
// Y que se va a crear una lista
const listaAmigos = () => {
    // Para que pueda parar y no se agreguen más nombres
    $("#lista").empty();
    $.get(url , listFriends )
}

const buscarAmigos = () => {
    const [input] = $("#input"); // Input es donde se colocan los numeros
    const id = input.value;
    // Para que input quede vacio y ademas si se pasa un valor que no existe salgo undefined
    input.value = " "
    // Para concatenar el url con el numero que nos pasan por Input
    $.get(`${url}/${id}` , buscarAmigo)
}

const deleteFriend = () => {
    const [inputDelete] = $("#inputDelete");
    const id = inputDelete.value

    $.ajax({
        type: "DELETE",
        url: `${url}/${id}`,
        success: (respuesta) => listFriends(respuesta)
    })
}


// Para agregar un metodo, en el boton que corresponde. Ejecuta una funcion
boton.addEventListener("click" , listaAmigos) // Evento para ver amigos
search.addEventListener("click" , buscarAmigos) // Evento para buscar amigos
deleteA.addEventListener("click" , deleteFriend)