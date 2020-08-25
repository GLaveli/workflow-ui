import axios from 'axios';

const api = axios.create({
 baseURL: 'https://152.67.42.113:1880/',
});

export default api;