const UIRenderer = (() => {

    const currentConditionsContainer = document.querySelector('.current-conditions-container');
    const gifContainer = document.querySelector('.gif-container');
    const forecastContainer = document.querySelector('.forecast-container');

    const renderCurrentConditions = (currentConditions) => {
        currentConditionsContainer.innerHTML = '';
        
        const html = `
            <div class="resolved-location-container">${currentConditions.resolvedAddress}</div>
            <div class="icon-container"><img src="${currentConditions.icon}"/></div>
            <div class="description-container">${currentConditions.description}</div>
            <div class="temperature-container">Temperature: ${currentConditions.temp}&#176;</div>
            <div class="feelslike-container">Feels like: ${currentConditions.feelsLike}&#176;</div>
            <div class="precipitation-container">Precipitation: ${currentConditions.precipitation}</div>
            <div class="humidity-container">Humidity: ${currentConditions.humidity}</div>
            <div class="wind-container">Wind: ${currentConditions.wind}</div>
            <div class="uvindex-container">UV index: ${currentConditions.uvindex}</div>
        `.trim();

        currentConditionsContainer.innerHTML = html;
    };

    const renderGif = (gif) => {

    };

    const createDayCard = (dayData) => {
        const html = `
            <div class="day-card">
                <div class="day-of-week">${dayData.dayOfWeek}</div>
                <div class="day-icon"><img src="${dayData.icon}"/></div>
                <div class="low-high">${dayData.low}&#176; / ${dayData.high}&#176;</div>
                <div class="day-precipitation">${dayData.precipitation}</div>
            </div>
        `.trim()

        return html;
    };

    const renderForecast = (dailyForecast) => {
        forecastContainer.innerHTML = '';
        for (let i = 0; i < dailyForecast.length; i++) {
            console.log(dailyForecast[i]);
            const dayCard = createDayCard(dailyForecast[i]);
            forecastContainer.innerHTML += dayCard;
        }
    };

    return { renderCurrentConditions, renderGif, renderForecast };
})();

export default UIRenderer;