import axios from 'axios';
import {
  FETCH_ELEPHANTS_REQUEST,
  FETCH_ELEPHANTS_SUCCESS,
  FETCH_ELEPHANTS_FAILURE,
} from '../types';

export const fetchElephantsRequest = () => ({
  type: FETCH_ELEPHANTS_REQUEST,
});

export const fetchElephantsSuccess = (elephants) => ({
  type: FETCH_ELEPHANTS_SUCCESS,
  payload: elephants,
});

export const fetchElephantsFailure = (error) => ({
  type: FETCH_ELEPHANTS_FAILURE,
  payload: error,
});

export const fetchElephants = () => {
  return (dispatch) => {
    dispatch(fetchElephantsRequest);
    axios
      .get('https://elephant-api.herokuapp.com/elephants')
      .then((response) => {
        const elephants = response.data;
        dispatch(fetchElephantsSuccess(elephants));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchElephantsFailure(errorMessage));
      });
  };
};
