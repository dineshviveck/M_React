
import axios from 'axios';


export function getGoogleAddressDetails(){
	return dispatch =>{
		 axios.get("Google Request URL need to past here").then(function (response) {
		 		dispatch({ type: "GOOGLE_ADDRESS", payload: response.data });
		}).catch(function (error) {
					dispatch({ type: "GOOGLE_ADDRESS_ERROR"});
		});

	};
 }
