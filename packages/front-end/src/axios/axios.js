import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://neocities.herokuapp.com/api/', });

export default axiosInstance;
