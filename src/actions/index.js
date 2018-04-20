// env import
import API_KEY from '../config/env';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// create a single variable that holds an action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator that is going to make an api call to weathermap.org
export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    }
}