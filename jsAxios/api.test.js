import { test, expect } from '@jest/globals';
import {
    getPost,
    getUser,
    getTodo,
    createPost,
    createComment,
} from './api.js';

test('GET /posts/1 returns status 200', async () => {
    const response = await getPost();

    expect(response.status).toBe(200);
});

test('GET /users/1 returns username Bret', async () => {
    const response = await getUser();

    expect(response.status).toBe(200);
    expect(response.data.username).toBe('Bret');
});

test('GET /todos/1 returns completed false', async () => {
    const response = await getTodo();

    expect(response.status).toBe(200);
    expect(response.data.completed).toBe(false);
});

test('POST /posts creates new post', async () => {
    const response = await createPost();

    expect(response.status).toBe(201);
    expect(response.data.title).toBe('Test Post');
});

test('POST /comments creates new comment', async () => {
    const response = await createComment();

    expect(response.status).toBe(201);
    expect(response.data.name).toBe('Max');
});