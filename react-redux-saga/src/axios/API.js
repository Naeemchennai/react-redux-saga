import axios from 'axios'
const getDataRest = () => {
    return axios.get('http://localhost:3000/posts');
};

export default getDataRest;