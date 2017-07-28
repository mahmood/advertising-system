import {
  FETCH_ADMIN_ADS_SUCCESS,
  FETCH_ADMIN_ADS_FAILED,
  DELETE_ADMIN_PRODUCT_SUCCESS,
  VERIFY_ADMIN_PRODUCT_SUCCESS
} from './actionTypes';
import axios from 'axios'

const ROOT_URL = 'http://localhost:3333/api/v1';

export const fetchProducts = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/product`)
    .then(response => {
      dispatch({ type: FETCH_ADMIN_ADS_SUCCESS, data: response.data });
    }).catch(error => {
      dispatch({ type: FETCH_ADMIN_ADS_FAILED });
    });
  };
};

export const deleteProduct = id => {
  return dispatch => {
    axios.delete(`${ROOT_URL}/product/${id}`)
    .then(response => {
      dispatch({ type: DELETE_ADMIN_PRODUCT_SUCCESS, id });
    })
  };
};

export const verifyProduct = id => {
  return dispatch => {
    axios.post(`${ROOT_URL}/product/${id}/verify`)
      .then(response => {
        dispatch({ type: VERIFY_ADMIN_PRODUCT_SUCCESS, id });
      })
  };
};
