import axios from 'axios';

export async function getPost() {
    return await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );
}

export async function getUser() {
    return await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );
}

export async function getTodo() {
    return await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
    );
}

export async function createPost() {
    return await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Test Post',
            body: 'Test Body',
            userId: 1,
        }
    );
}

export async function createComment() {
    return await axios.post(
        'https://jsonplaceholder.typicode.com/comments',
        {
            name: 'Max',
            email: 'max@test.com',
            body: 'Hello',
        }
    );
}