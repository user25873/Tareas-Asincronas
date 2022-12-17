function getUsers() {
    fetch("http://localhost:9000/api/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

getUsers()