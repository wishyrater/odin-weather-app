import './style.css';
import WeatherAPIClient from './WeatherAPIClient.js';
import EventManager from './EventManager.js';

console.log('Online');

document.addEventListener('DOMContentLoaded', (e) => {

    EventManager.setFormEventListener();
    WeatherAPIClient.fetchForecast('Oslo');
});