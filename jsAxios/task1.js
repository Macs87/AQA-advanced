import axios from 'axios';

async function getPost() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Status:', response.status);
    console.log('Data:', response.data);

    if (response.status === 200) {
        console.log('Status check PASSED');
    }

    if (response.data.id === 1) {
        console.log('ID check PASSED');
    }
}

async function getUser() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    console.log('\nUSER');
    console.log(response.data);

    if (response.status === 200) {
        console.log('Status check PASSED');
    }

    if (response.data.username === 'Bret') {
        console.log('Username check PASSED');
    }
}

async function getTodo() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
    );

    console.log('\nTODO');
    console.log(response.data);

    if (response.status === 200) {
        console.log('Status check PASSED');
    }

    if (response.data.completed === false) {
        console.log('Completed check PASSED');
    }
}

async function createPost() {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Test Post',
            body: 'Test Body',
            userId: 1,
        }
    );

    console.log('\nCREATE POST');
    console.log(response.data);

    if (response.status === 201) {
        console.log('Status check PASSED');
    }

    if (response.data.title === 'Test Post') {
        console.log('Title check PASSED');
    }
}

async function createComment() {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/comments',
        {
            name: 'Max',
            email: 'max@test.com',
            body: 'Hello',
        }
    );

    console.log('\nCREATE COMMENT');
    console.log(response.data);

    if (response.status === 201) {
        console.log('Status check PASSED');
    }

    if (response.data.name === 'Max') {
        console.log('Name check PASSED');
    }
}

async function runTests() {
    await getPost();
    await getUser();
    await getTodo();
    await createPost();
    await createComment();
}

runTests();