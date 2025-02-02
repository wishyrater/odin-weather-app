import { getIcon } from './icons.js';
const UIRenderer = (() => {

    const currentConditionsContainer = document.querySelector('.current-conditions-container');
    const gifContainer = document.querySelector('.gif-container');
    const forecastContainer = document.querySelector('.forecast-container');

    const renderCurrentConditions = (currentConditions) => {
        currentConditionsContainer.innerHTML = '';

        const icon = getIcon(currentConditions.icon);
        
        const html = `
            <div class="current-conditions-header">
                <div class="resolved-location-container">${currentConditions.resolvedAddress}</div>
                <div class="icon-container"><img src="${icon}" height="50px"/></div>
                <div class="description-container">${currentConditions.description}</div>
            </div>
            <table class="current-conditions-data" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="data-label">Temperature</td>
                    <td class="data-value">${currentConditions.temp}&#176;</td>
                </tr>
                <tr>
                    <td class="data-label">Feels like</td>
                    <td class="data-value">${currentConditions.feelsLike}&#176;</td>
                </tr>
                <tr>
                    <td class="data-label">Precipitation</td>
                    <td class="data-value">${currentConditions.precipitation}</td>
                </tr>
                <tr>
                    <td class="data-label">Humidity</td>
                    <td class="data-value">${currentConditions.humidity}</td>
                </tr>
                <tr>
                    <td class="data-label">Wind</td>
                    <td class="data-value">${currentConditions.wind} kph</td>
                </tr>
                <tr>
                    <td class="data-label">UV Index</td>
                    <td class="data-value">${currentConditions.uvindex}</td>
                </tr>
            </table>
        `.trim();

        currentConditionsContainer.innerHTML = html;
    };

    const renderGif = (gif) => {

    };

    const createDayCard = (dayData) => {
        const icon = getIcon(dayData.icon);
        const html = `
            <div class="day-card">
                <div class="day-of-week">${dayData.dayOfWeek}</div>
                <div class="day-icon"><img src="${icon}" width="50px" height="50px"/></div>
                <div class="low-high">${dayData.low}&#176; / ${dayData.high}&#176;</div>
                <div class="day-precipitation">${dayData.precipitation}</div>
            </div>
        `.trim()

        return html;
    };

    const renderForecast = (dailyForecast) => {
        forecastContainer.innerHTML = '';
        for (let i = 0; i < dailyForecast.length; i++) {
            const dayCard = createDayCard(dailyForecast[i]);
            forecastContainer.innerHTML += dayCard;
        }
    };

    return { renderCurrentConditions, renderGif, renderForecast };
})();

export default UIRenderer;