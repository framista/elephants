import {
  FETCH_ELEPHANTS_REQUEST,
  FETCH_ELEPHANTS_SUCCESS,
  FETCH_ELEPHANTS_FAILURE,
} from '../../../redux/types';
import {
  fetchElephantsRequest,
  fetchElephantsSuccess,
  fetchElephantsFailure,
} from '../../../redux/elephants/actions';

describe('test fetchElephantsRequest', () => {
  it('should generate fetch elephanths request action object', () => {
    const result = fetchElephantsRequest();
    expect(result).toEqual({
      type: FETCH_ELEPHANTS_REQUEST,
    });
  });
});

describe('test fetchElephantsSuccess', () => {
  it('should generate fetch elephants success action object', () => {
    const elephants = [
      { name: 'John', sex: 'male' },
      { name: 'Tom', sex: 'male' },
    ];
    const result = fetchElephantsSuccess(elephants);
    expect(result).toEqual({
      type: FETCH_ELEPHANTS_SUCCESS,
      payload: elephants,
    });
  });
});

describe('test fetchElephantsFailure', () => {
  it('should generate fetch elephants failure action object', () => {
    const error = 'Network error';
    const result = fetchElephantsFailure(error);
    expect(result).toEqual({ type: FETCH_ELEPHANTS_FAILURE, payload: error });
  });
});
