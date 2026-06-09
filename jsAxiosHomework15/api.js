import axios from 'axios';

export async function getWithWrongUrl() {
    try {
        await axios.get(
            'https://jsonplaceholder.typicode.com/wrong-endpoint'
        );
    } catch (error) {
        return error.message;
    }
}

export async function getPostsWithHeadersAndParams() {
    return axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
            headers: {
                Authorization: 'Bearer test-token',
                CustomHeader: 'QA-Automation',
            },
            params: {
                userId: 1,
            },
        }
    );
}

export async function getPost(postId) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    return response.data;
}