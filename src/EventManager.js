import WeatherAPIClient from "./WeatherAPIClient";
import GiphyAPIClient from "./GiphyAPIClient";
import DataHandler from "./DataHandler";

const EventManager = (() => {
    const form = document.querySelector('form');
    const searchInput = document.getElementById('location');

    const setFormEventListener = () => {
        form.addEventListener('submit', (e) => {
            handleFormEvent(e);
        });
    };

    const handleFormEvent = async (e) => {
        e.preventDefault();
        const searchQuery = searchInput.value;
        const weatherData = await WeatherAPIClient.fetchForecast(searchQuery);
        const forecast = DataHandler.handleWeatherForecast(weatherData);
        // giphyData.data.url for the gif url
        const giphyData = await GiphyAPIClient.fetchGif(weatherData.currentConditions.icon);
        console.log(weatherData);
        console.log(forecast.getCurrentConditions());
        console.log(forecast.getDailyForecast());
    };

    return { setFormEventListener };
})();

export default EventManager;