import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ignite-dtmoney-snowy.vercel.app/api',
});
