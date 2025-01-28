import WeatherAPIClient from "./WeatherAPIClient";

const EventManager = (() => {
    const form = document.querySelector('form');
    const searchInput = document.getElementById('location');

    const setFormEventListener = () => {
        form.addEventListener('submit', (e) => {
            handleFormEvent(e);
        });
    };

    const handleFormEvent = (e) => {
        e.preventDefault();
        const searchQuery = searchInput.value;
        WeatherAPIClient.fetchForecast(searchQuery)
            .then((data) => {
                console.log(data);
            })
    };

    return { setFormEventListener };
})();

export default EventManager;