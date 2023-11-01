import axios from 'axios';

const request = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`

});

export default request;