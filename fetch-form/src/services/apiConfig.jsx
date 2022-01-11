import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://frontend-take-home.fetchrewards.com/form'
  : 'https://frontend-take-home.fetchrewards.com'

const api = axios.create({
  baseURL: baseUrl
})

export default api;