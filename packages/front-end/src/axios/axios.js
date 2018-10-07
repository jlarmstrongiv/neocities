import axios from 'axios';

export const baseUrl = 'neocities.herokuapp.com';
const axiosInstance = axios.create({ baseURL: `https://${baseUrl}/api/`, });
export default axiosInstance;
