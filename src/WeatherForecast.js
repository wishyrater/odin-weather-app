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
            "feelsLike": this._data.currentConditions.feelslike,
            "precipitation": (Math.floor(this._data.currentConditions.precip * 100)).toFixed(2) + '%',
            "humidity": this._data.currentConditions.humidity + '%',
            "wind": this._data.currentConditions.windspeed,
            "uvindex": this._data.currentConditions.uvindex,
        };
        return currentConditions;
    };

    getDailyForecast = () => {
        const numDays = 7;
        const dailyForecast = [];
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        for (let i = 0; i < numDays; i++) {
            const todaysData = this._data.days.at(i);
            const date = new Date(todaysData.datetime);
            let dayOfWeek;
            if (i === 0) {
                dayOfWeek = 'Today';
            } else {
                dayOfWeek = daysOfWeek[date.getDay()];
            }
            const day = {
                "dayOfWeek": dayOfWeek,
                "icon": todaysData.icon,
                "low": todaysData.tempmin,
                "high": todaysData.tempmax,
                "precipitation": (todaysData.precip * 100).toFixed(2) + '%',
            };
            dailyForecast.push(day);
        }
        return dailyForecast;
    }
}