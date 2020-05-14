import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
const customData = require("../mockJson/businessResponse.json");

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async () => {
		try {
			// const response = await yelp.get('/search', {
			//   params : {
			//     limit: 50,
			//     term: sunil,
			//     location: 'san jose'
			//   }
			// });
			// setResults(response.data.businesses);

			//Mocking response of API
			setResults(customData.businesses);
			console.log('Inside the api call');
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	};

	//calling searchApi('pasta') directly will be render again and again in infinite loop therefore better to put in 'useEffect' Event
	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [searchApi, results, errorMessage];
}