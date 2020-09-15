import React from 'react';
import 'normalize.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ElephantContainer from './components/elephant-container';

function App() {
  return (
    <Provider store={store}>
      <ElephantContainer />
    </Provider>
  );
}

export default App;
