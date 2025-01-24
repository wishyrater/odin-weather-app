import './style.css';
import WeatherAPIClient from './WeatherAPIClient.js';

console.log('Online');

document.addEventListener('DOMContentLoaded', (e) => {
    WeatherAPIClient.fetchForecast('Oslo');
});