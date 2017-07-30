import { 
  FETCH_ADMIN_CATS_SUCCESS
} from './actionTypes.js';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3333/api/v1';

export const fetchCategories = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/category`)
      .then(response => {
        dispatch({ type: FETCH_ADMIN_CATS_SUCCESS, data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};