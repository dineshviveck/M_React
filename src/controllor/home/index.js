
import { Record } from 'immutable';
import * as homeActions from './actions';
export { homeActions };


const homeState = new Record({ activePage:'', responseMsg:'', actionNeeded : '', data : null });

export function homeReducer(state = new homeState(), {payload, type}) {
  switch (type) {
  	case "GOOGLE_ADDRESS":
  		return state.merge({activePage:payload.pageName , actionNeeded : payload.actionNeeded});
    default:
    	return state;
  }
}

export function getHomeState(state) {
  return state.home;
}


export function authenticateUser(state) {

	 // condition need to add for user session validation

	 return true;

}
