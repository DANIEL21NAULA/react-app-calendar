import axios from 'axios';
import { getEnvironments } from '../helpers';

const { VITE_API_URI } = getEnvironments();

const calendarAPI = axios.create({
  baseURL: VITE_API_URI,
});

// TODO: configurar interceptores
calendarAPI.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  };

  return config;
});

export default calendarAPI;
