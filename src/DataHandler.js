import WeatherForecast from "./WeatherForecast.js";
const DataHandler = (() => {

    const handleWeatherForecast = (weatherData) => {
        return new WeatherForecast(weatherData);
    };

    return { handleWeatherForecast };
})();

export default DataHandler;