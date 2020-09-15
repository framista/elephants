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
  const herokuAnywhareUrl = 'https://cors-anywhere.herokuapp.com/';
  const elephantsUrl = 'https://elephant-api.herokuapp.com/elephants';
  const endpoint = herokuAnywhareUrl + elephantsUrl;
  return (dispatch) => {
    dispatch(fetchElephantsRequest);
    axios
      .get(endpoint)
      .then((response) => {
        const elephants = response.data.filter(
          (el) =>
            el.index && !el.image.includes('missing') && el.name.length < 12
        );
        elephants.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        dispatch(fetchElephantsSuccess(elephants));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchElephantsFailure(errorMessage));
      });
  };
};
