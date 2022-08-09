import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9010a43c0012a5e95e10291b87232b2b',
        language: 'es-Es',
    },
});

export default movieDB;
