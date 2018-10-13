import axios from 'axios';

// Also see /public/CORS
// export const baseUrl = 'neocities.herokuapp.com';
export const baseUrl = 'neocities.herokuapp.com';
const axiosInstance = axios.create({ baseURL: `https://${baseUrl}/api/`, });
export default axiosInstance;
