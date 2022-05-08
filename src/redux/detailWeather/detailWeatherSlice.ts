import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPayload } from '../type';
import { fetchDetailyWeatherAction } from './detailWeatherApi';
import { IInitialState } from './type';

const initialState: IInitialState = {
  name: '',
  feels_like: 0,
  pressure: 0,
  temp: 0,
  temp_max: 0,
  temp_min: 0,
  wind_speed: 0,
  humidity: 0,
  coord: {
    lon: null,
    lat: null,
  },
  weather: {
    description: '',
    icon: '',
    id: 0,
  },
  loading: false,
  error: null,
}

const detailWeatherSlice = createSlice({
    name: 'detailWeather',
    initialState: initialState,
    reducers: {},
    extraReducers: {
      [fetchDetailyWeatherAction.pending.type]: (state) => {
        state.loading = true;
      },
      [fetchDetailyWeatherAction.fulfilled.type]: (state, action: PayloadAction<IPayload>) => {
        state.name = action.payload.name;
          state.feels_like = action.payload.main.feels_like;
          state.pressure = action.payload.main.pressure;
          state.humidity = action.payload.main.humidity;
          state.temp_max = action.payload.main.temp_max;
          state.temp_min = action.payload.main.temp_min;
          state.coord.lon = action.payload.coord.lon;
          state.coord.lat = action.payload.coord.lat;
          state.temp = action.payload.main.temp;
          state.wind_speed = action.payload.wind.speed;
          state.weather = {
            description: action.payload.weather[0].description,
            icon: action.payload.weather[0].icon,
            id: action.payload.weather[0].id,
          };
        state.loading = false;
        state.error = null;
      },
      [fetchDetailyWeatherAction.rejected.type]: (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action?.payload;
      },
    },
});

export const { reducer } = detailWeatherSlice;
