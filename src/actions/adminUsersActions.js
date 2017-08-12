import { 
  FETCH_ADMIN_USERS_SUCCESS,
  DELETE_ADMIN_USER_SUCCESS
} from './actionTypes.js';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3333/api/v1';

export const fetchUsers = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/users`)
      .then(response => {
        dispatch({ type: FETCH_ADMIN_USERS_SUCCESS, data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteUser = id => {
  return dispatch => {
    axios.delete(`${ROOT_URL}/users/${id}`)
      .then(response => {
        dispatch({ type: 'DELETE_ADMIN_USER_SUCCESS', id });
      }).catch(error => {
        console.log(error);
      })
  }
}