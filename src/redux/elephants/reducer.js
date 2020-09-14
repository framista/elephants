import {
  FETCH_ELEPHANTS_REQUEST,
  FETCH_ELEPHANTS_SUCCESS,
  FETCH_ELEPHANTS_FAILURE,
} from '../types';

const initialState = {
  loading: false,
  elephants: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ELEPHANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ELEPHANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        elephants: action.payload,
        error: '',
      };
    case FETCH_ELEPHANTS_FAILURE:
      return {
        ...state,
        loading: false,
        elephants: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
