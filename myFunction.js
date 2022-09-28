import axios from "axios"

async function getData (userID) {
    const  { data : user } = await axios("https://jsonplaceholder.typicode.com/users/" + userID)
    const  { data : post } = await axios("https://jsonplaceholder.typicode.com/posts/" + userID)

    let data = {user, post}
    console.log(data)
}

export default getData;