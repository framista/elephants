import {
  FETCH_ELEPHANTS_REQUEST,
  FETCH_ELEPHANTS_SUCCESS,
  FETCH_ELEPHANTS_FAILURE,
} from '../../../redux/types';
import reducer from '../../../redux/elephants/reducer';

describe("test elephant's reducer", () => {
  const initialState = {
    loading: false,
    elephants: [],
    error: '',
  };
  const elephants = [
    { name: 'John', sex: 'male' },
    { name: 'Tom', sex: 'male' },
  ];
  it('should setup default elephants values', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });
  it('should set true for loading when is fetched elephants request', () => {
    const action = { type: FETCH_ELEPHANTS_REQUEST };
    const state = reducer(undefined, action);
    expect(state.loading).toBeTruthy();
  });
  it('should set false for loading when fetching is successfully', () => {
    const currentState = {
      loading: true,
      elephants: [],
      error: 'Network error',
    };
    const action = { type: FETCH_ELEPHANTS_SUCCESS, payload: [] };
    const state = reducer(currentState, action);
    expect(state.loading).toBeFalsy();
  });
  it('should set arrays with elements when fetching is successfully', () => {
    const action = { type: FETCH_ELEPHANTS_SUCCESS, payload: elephants };
    const state = reducer(undefined, action);
    expect(state.elephants).toEqual(elephants);
  });
  it('should set to empty string error when fetching is successfully', () => {
    const currentState = {
      loading: false,
      elephants: [],
      error: 'Network error',
    };
    const action = { type: FETCH_ELEPHANTS_SUCCESS, payload: elephants };
    const state = reducer(currentState, action);
    expect(state.error).toBe('');
  });
  it('should set empty array when fetching is unsuccessfully', () => {
    const currentState = { loading: false, elephants, error: '' };
    const action = { type: FETCH_ELEPHANTS_FAILURE, payload: 'Network error' };
    const state = reducer(currentState, action);
    expect(state.elephants).toEqual([]);
  });
  it('should set error when fetching is unsuccessfully', () => {
    const error = 'Network error';
    const action = { type: FETCH_ELEPHANTS_FAILURE, payload: error };
    const state = reducer(undefined, action);
    expect(state.error).toBe(error);
  });
  it('should set loading to false when fetching is unsuccessfully', () => {
    const currentState = { loading: true, elephants, error: '' };
    const action = { type: FETCH_ELEPHANTS_FAILURE, payload: 'Network error' };
    const state = reducer(currentState, action);
    expect(state.loading).toBeFalsy();
  });
});
