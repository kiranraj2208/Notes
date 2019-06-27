import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-projects-ea4f4.firebaseio.com/'
});

export default instance;