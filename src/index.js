import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import employeeReducer from './reuducer/employeeDetails';
import { createStore, combineReducers } from 'redux';
import equipmentReducer from './reuducer/currentEquipment';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
  worker: employeeReducer,
  equipment: equipmentReducer,
});

const employeestore = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={employeestore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
