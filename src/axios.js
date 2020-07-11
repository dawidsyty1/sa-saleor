import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://3.10.4.223:8000/api/v1'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;