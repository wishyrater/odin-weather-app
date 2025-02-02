import WeatherAPIClient from "./WeatherAPIClient";
import GiphyAPIClient from "./GiphyAPIClient";
import DataHandler from "./DataHandler";
import UIRenderer from "./UIRenderer";

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
        if (weatherData !== undefined) {
            const forecast = DataHandler.handleWeatherForecast(weatherData);
            UIRenderer.renderCurrentConditions(forecast.getCurrentConditions());
            UIRenderer.renderForecast(forecast.getDailyForecast());
            // giphyData.data.url for the gif url
            const giphyData = await GiphyAPIClient.fetchGif(weatherData.currentConditions.icon);
            console.log(giphyData);
            const gif = DataHandler.handleGiphyResponse(giphyData);
            console.log(gif);
            UIRenderer.renderGif(gif);
        }
        


    };

    return { setFormEventListener };
})();

export default EventManager;