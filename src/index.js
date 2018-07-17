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


ReactDOM.render(
  <AppContainer>
    <Root history={syncedHistory} store={store} />
  </AppContainer>, document.getElementById('root')
);
