import { 
  FETCH_ADMIN_USERS_SUCCESS,
  DELETE_ADMIN_USER_SUCCESS
} from './actionTypes.js';
import axios from 'axios';
import { apiEndPoint } from '../../config.js';


export const fetchUsers = () => {
  return dispatch => {
    axios.get(`${apiEndPoint}/users`)
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
    axios.delete(`${apiEndPoint}/users/${id}`)
      .then(response => {
        dispatch({ type: 'DELETE_ADMIN_USER_SUCCESS', id });
      }).catch(error => {
        console.log(error);
      })
  }
}