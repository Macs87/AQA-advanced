class TodoService {
    async getTodo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        return response.json();
    }
}

class UserService {
    async getUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        return response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

async function getData() {
    try {
        const [todo, user] = await Promise.all([
            todoService.getTodo(),
            userService.getUser()
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