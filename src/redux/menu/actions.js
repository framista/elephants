import { CHANGE_LIST } from '../types';

export const changeList = (type) => ({
  type: CHANGE_LIST,
  payload: type,
});
