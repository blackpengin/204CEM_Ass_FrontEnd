import axios from 'axios';

const userRequest = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'Content-Type': 'application/json' },
})

// 可以統一管理 API Call
export const authFunc = data => userRequest.post('/api/users', data);