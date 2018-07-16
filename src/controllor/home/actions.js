
import axios from 'axios';



export function getGoogleAddressDetails(){
	return dispatch =>{
     var data= { "pageName" : pageName , "actionNeeded": actionNeeded };
	   dispatch({type:"GOOGLE_ADDRESS",payload:data});
	};
 }
}

export function authenticateUser(state) {

	 // condition need to add for user session validation

	 return true;

}
