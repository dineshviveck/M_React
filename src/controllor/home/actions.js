
import axios from 'axios';


export function getGoogleAddressDetails(){
	return dispatch =>{
     var data= { "pageName" : pageName , "actionNeeded": actionNeeded };
	   dispatch({type:"GOOGLE_ADDRESS",payload:data});
	};
 }
