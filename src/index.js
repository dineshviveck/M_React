import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './controllor/store';
import axios from 'axios';
import Root from './router/root';
import App from './view/home';


const store = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

axios.interceptors.request.use(function (config) {
    console.log("==== >  REST API Request Interceptor")
    // API KEY
    // JWT Token
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    return Promise.resolve(response);
  }, function (err,response) {
    const error = err;
    // Global ERROR
    console.log("==== > REST API Response Interceptor");
    // Error handler code need here.

    return Promise.reject(error);
 });



ReactDOM.render(
  <AppContainer>
    <Root history={syncedHistory} store={store} />
  </AppContainer>, document.getElementById('root')
);
