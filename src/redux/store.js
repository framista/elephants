import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerElephant from './elephants/reducer';
import reducerMenu from './menu/reducer';

const reducer = combineReducers({
  elephants: reducerElephant,
  menu: reducerMenu,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
