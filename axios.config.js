import axios from 'axios';
import config from './config.js';

let response = await axios.post(`${config.baseUrl}/auth`,{},{
    params: {
        username: config.adminUsername,
        password: config.adminPassword
    }
});
const instance = axios.create({
    baseURL: config.baseUrl,
    headers: {'Authorization': `Bearer ${response.data.authToken}`}
  });

  export default instance