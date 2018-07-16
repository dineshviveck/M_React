import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

export default (initialState = {}) => {
	const store = createStore(
	    reducers,
	    initialState,
	    applyMiddleware(thunkMiddleware, promiseMiddleware())
	);
  	return store;
};
