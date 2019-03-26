import axios from 'axios';

const api = axios.create({
  baseURL: 'https://textecnologia-dev.herokuapp.com/'
});

export default api;
