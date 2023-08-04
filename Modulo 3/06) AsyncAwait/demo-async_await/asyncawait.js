// Async Await

const axios = require ("axios")

// async function getUsers(){
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users")
//     console.log(data)
// }
// getUsers()

// const getUsers = async () => {
//     const { data } = await axios ("https://jsonplaceholder.typicode.com/users")
//     console.log(data)
// }
// getUsers()

const getUsers = async () => {
    try {
        const { data } = await axios ("https://jsonplaceholder.typicode.com/users")
        const users = data.map(user => {
            return {
                id: user.id,
                name: user.name
            }
        })
        // console.log(users)
        return users
    } catch (error) {
        console.log("Hubo un error")
    }
}

getUsers();

// getUsers().then(response => console.log(response))

// server.get("/", async (req, res) => {
//     await getUsers();
// })