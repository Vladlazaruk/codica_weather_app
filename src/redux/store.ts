import { configureStore } from '@reduxjs/toolkit';
import { reducer as weatherReducer } from './weather/weatherSlice';
import { reducer as hourlyWeatherReducer } from './weatherHourly/waetherHourlySlice';
import { reducer as detailWeatherReducer } from './detailWeather/detailWeatherSlice';

const store = configureStore({
  reducer: {
    weatherData: weatherReducer,
    hourlyWeather: hourlyWeatherReducer,
    detailWeather: detailWeatherReducer,
  },
});

export default store;
