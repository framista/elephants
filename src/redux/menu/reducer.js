import { CHANGE_LIST } from '../types';

const initialState = {
  listType: 'diamonds',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        listType: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
