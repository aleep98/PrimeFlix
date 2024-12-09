import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=0cf5142d985256ab23f020f8636ff5de


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;