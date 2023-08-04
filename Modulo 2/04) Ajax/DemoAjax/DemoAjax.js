// Ajax nos permite hacer una peticion al servidor y el servidor devuelve siempre la info con un JSON
// Ajax nos permite hacer peticiones asincronicas
// Ajax trabaja con Jquery
// La diferencia entre json y js es que todo esta escrtio entre " ". Es similiar pero no igual a js

// Metodos de HTML

// get ==> obtener
// post ==> publicar
// put ==> actualizar
// delete ==> borrar

// Demo 
// https://jsonplaceholder.typicode.com/users

const responseHandler =  (response) => {
    const [usersList] = $("#usersList")

    response.forEach(user => {
        const newLi = document.createElement("li");
        newLi.innerText = user.name
        usersList.appendChild(newLi)
    })
}

const [loadUsers] = $("#loadUsers")

const fetchUsers = () => {
    $.get("https://jsonplaceholder.typicode.com/users" , responseHandler)
}


loadUsers.addEventListener("click", fetchUsers)