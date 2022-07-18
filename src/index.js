import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  //An middleware Redux Thunk allows us to dispatch actions asynchronously and resolve each promise that gets returned.

import 'firebase/firestore'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);