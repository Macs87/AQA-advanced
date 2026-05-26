async function getTodo() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    return response.json();
}

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    return response.json();
}

async function getData() {
    try {
    const [todo, user] = await Promise.all([
        getTodo(),
        getUser()
    ]);

    console.log("Todo:");
    console.log(todo);

    console.log("User:");
    console.log(user);

    } catch(error) {
    console.log("Error:", error);
    }

}

getData();