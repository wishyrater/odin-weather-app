import WeatherForecast from "./WeatherForecast.js";
const DataHandler = (() => {

    const handleWeatherForecast = (weatherData) => {
        return new WeatherForecast(weatherData);
    };

    const handleGiphyResponse = (giphyData) => {
        return giphyData.data.images.original.url;
    }

    return { handleWeatherForecast, handleGiphyResponse };
})();

export default DataHandler;