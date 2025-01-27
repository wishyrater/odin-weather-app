const WeatherAPIClient = (() => {

    const apiKey = 'QLM2G4TQ84QSNUBFRCLQJPGUZ';
    const endpoint = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

    const fetchForecast = async (location) => {
        try {
            const response = await fetch(`${endpoint}${location}?key=${apiKey}`);
            const weatherData = await response.json();
            console.log(weatherData);
            return weatherData;
        } catch (error) {
            console.error(error);
        }
    };

    return { fetchForecast };

})();

export default WeatherAPIClient;