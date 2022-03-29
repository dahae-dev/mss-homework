import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://static.msscdn.net/musinsaUI/homework/data', // process.env.REACT_APP_API_HOST
});

export default instance;
