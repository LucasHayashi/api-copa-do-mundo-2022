import axios from 'axios';
import { gerarToken } from './authy.js';

export const api = axios.create({
    baseURL: 'http://api.cup2022.ir/api/v1'
});

export const apiLogin = axios.create({
    baseURL: 'http://api.cup2022.ir/api/v1/user'
});

api.interceptors.response.use(function (res) {
    return res;
}, async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
        const new_access_token = await gerarToken();

        if (new_access_token.error) {
            return Promise.resolve({ data: new_access_token })
        } else {
            api.defaults.headers.common['Authorization'] = `Bearer ${new_access_token}`;
            return api(originalRequest);
        }
    } else {
        return Promise.resolve(error.response)
    }
});