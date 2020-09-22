import React from 'react';
import 'normalize.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ElephantContainer from './components/container';
import Menu from './components/menu';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <ElephantContainer />
    </Provider>
  );
}

export default App;
