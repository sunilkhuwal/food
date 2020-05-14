
import axios from 'axios';

export default axios.create({
	//proxyURL: 'https://cors-anywhere.herokuapp.com/',
	baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx',
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		//'Origin': 'http://localhost:19006'


	}
});