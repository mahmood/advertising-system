import { ADD_PRODUCT } from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3333/api/v1';
// const config = {
//             headers: { 'content-type': 'multipart/form-data' }
//         }
export const addProduct = data => {
  console.log('action', data);
  const newData = new FormData();
  data.images.map((image, i) => newData.append('photo', data.images[i]));
  newData.append('name', data.name);
  newData.append('category', data.category);
  newData.append('price_type', data.price_type);
  newData.append('price', data.price || 0);
  newData.append('description', data.description);

  return dispatch => {
    axios.post(`${ROOT_URL}/product`, newData, { headers: { Authorization: 'Bearer '+localStorage.getItem('token') } })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
};