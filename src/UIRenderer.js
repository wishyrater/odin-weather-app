const UIRenderer = (() => {

    const currentConditionsContainer = document.querySelector('.content-container');
    const gifContainer = document.querySelector('.gif-container');
    const forecastContainer = document.querySelector('.forecast-container');

    const renderCurrentConditions = (currentConditions) => {

        currentConditionsContainer.innerHTML = '';

        const html = `
            <div class="resolved-location-container">${currentConditions.resolvedLocation}</div>
            <div class="icon-container"><img src="${currentConditions.icon}"/></div>
            <div class="description-container">${currentConditions.description}</div>
            <div class="temperature-container">${currentConditions.temp}</div>
            <div class="feelslike-container">${currentConditions.feelsLike}</div>
            <div class="precipitation-container">${currentConditions.precipitation}</div>
            <div class="humidity-container">${currentConditions.humidity}</div>
            <div class="wind-container">${currentConditions.wind}</div>
            <div class="uvindex-container">${currentConditions.uvindex}</div>
        `.trim();

        currentConditionsContainer.appendChild(html);
    };

    const renderGif = (gif) => {

    };

    const createDayCard = (dayData) => {
        const html = `
            <div class="day-card">
                <div class="day-of-week">${dayData.dayOfWeek}</div>
                <div class="day-icon"><img src="${dayData.icon}"/></div>
                <div class="low-high">${dayData.low}/${dayData.high}</div>
                <div class="day-precipitation">${dayData.precipitation}</div>
            </div>
        `.trim()

        return html;
    };

    const renderForecast = (dailyForecast) => {
        forecastContainer.innerHTML = '';
        dailyForecast.forEach((day) => {
            const dayCard = createDayCard(day);
            forecastContainer.appendChild(dayCard);
        });
    };

    return { renderCurrentConditions, renderGif, renderForecast };
})();