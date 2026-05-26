function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
}

Promise.all([
    getTodo(),
    getUser()
])
.then(([todo, user]) => {
    console.log("Todo:");
    console.log(todo);

    console.log("User:");
    console.log(user);
})
.catch(error => {
    console.log("Error:", error);
});