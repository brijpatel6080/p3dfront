import axios from 'axios';
import { getToken } from '../../helpers';

export const defaultParams = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});
axios.defaults.baseURL = 'http://13.233.199.186:3000/api/v1';
// axios.defaults.baseURL = 'http://65.0.155.198:3000/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

export default axios;
