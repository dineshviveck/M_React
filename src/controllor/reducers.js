import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { homeReducer } from './home';


const appReducer = combineReducers({
  home: homeReducer,
  routing: routerReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export function resetState() {
  return appReducer();
}

export default appReducer;
