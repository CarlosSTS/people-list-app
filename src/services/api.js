import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api/?nat=br&results=15',
})

export default api;