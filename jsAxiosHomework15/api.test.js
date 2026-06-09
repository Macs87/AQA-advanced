import axios from 'axios';
import { test, expect, jest, describe, beforeEach } from '@jest/globals';

import {
    getWithWrongUrl,
    getPostsWithHeadersAndParams,
    getPost,
} from './api.js';

beforeEach(() => {
    jest.restoreAllMocks();
});

describe('Task 1 - Error Handling', () => {
    test('should return error message for wrong url', async () => {
        jest.spyOn(axios, 'get').mockRejectedValue(
            new Error('Request failed with status code 404')
        );

        const result = await getWithWrongUrl();

        expect(result).toBe(
            'Request failed with status code 404'
        );
    });
});

describe('Task 2 - Headers and Params', () => {
    test('should send correct headers and params', async () => {
        const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({
            status: 200,
            data: [],
        });

        await getPostsWithHeadersAndParams();

        expect(getSpy).toHaveBeenCalledWith(
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
    });
});

describe('Task 3 - Mocking Axios', () => {
    test('should return mocked post', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                id: 1,
                title: 'Mocked Post',
            },
        });

        const result = await getPost(1);

        expect(result.id).toBe(1);
        expect(result.title).toBe('Mocked Post');
    });

    test('should handle failed request', async () => {
        jest.spyOn(axios, 'get').mockRejectedValue(
            new Error('Network Error')
        );

        await expect(getPost(1)).rejects.toThrow(
            'Network Error'
        );
    });
});