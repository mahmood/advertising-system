import {
  FETCH_ADMIN_ADS_SUCCESS,
  FETCH_ADMIN_ADS_FAILED,
  DELETE_ADMIN_PRODUCT_SUCCESS,
  VERIFY_ADMIN_PRODUCT_SUCCESS
} from './actionTypes';
import axios from 'axios';
import { push } from 'react-router-redux';

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

export const addProduct = data => {
  const newData = new FormData();
  console.log(data.photo);
  data.photo.map((image, i) => newData.append('photo', data.photo[i]));
  newData.append('name', data.name);
  newData.append('category', data.category);
  newData.append('price_type', data.price_type);
  newData.append('price', data.price || 0);
  newData.append('description', data.description);

  return dispatch => {
    axios.post(`${ROOT_URL}/product`, newData, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => {
        dispatch(push('/admin/ads'));
      }).catch(error => {
        console.log(error);
      });

  }
};