export default class WeatherForecast {
    
    constructor(data) {
        this._data = data;
        this._resolvedAddress = data.resolvedAddress;
    }

    getCurrentConditions = () => {
        const currentConditions = {
            "description": this._data.description,
            "icon": this._data.currentConditions.icon,
            "temp": this._data.currentConditions.temp,
            "feelsLike": this._data.currentConditions.feelsLike,
            "precipitation": this._data.currentConditions.precip,
            "humidity": this._data.currentConditions.humidity,
            "wind": this._data.currentConditions.wind,
            "uvindex": this._data.currentConditions.uvindex,
        };
        return currentConditions;
    };

    getDailyForecast = () => {
        const numDays = 7;
        const dailyForecast = [];
        for (let i = 0; i < numDays; i++) {
            const todaysData = this._data.days.at(i);
            const date = new Date(todaysData.datetime);
            let dayOfWeek;
            if (i === 0) {
                dayOfWeek = 'Today';
            } else {
                dayOfWeek = date.getDay();
            }
            const day = {
                "dayOfWeek": dayOfWeek,
                "icon": todaysData.icon,
                "low": todaysData.tempmin,
                "high": todaysData.tempmax,
                "precipitation": todaysData.precip,
            };
            dailyForecast.push(day);
        }
        return dailyForecast;
    }
}