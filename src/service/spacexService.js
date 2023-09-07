import axios from 'axios';

const spacexService = axios.create({
  baseURL: process.env.REACT_APP_SPACEX_API_BASEURL, // Define the base URL from environment variables
});

// Define API request functions
const getInfo = () => spacexService.get('/launches/getLandingPage');

const getlaunches = () => spacexService.get('/launches/getLaunches');

const getShips = () => spacexService.get('/launches/getLaunches');

const getMissions = () => spacexService.get('/launches/getMissions');

export { getInfo ,getlaunches,getShips,getMissions};
