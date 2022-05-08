import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IPayload } from './type';
import { fetchHourlyWeatherAction } from './weatherHourlyApi';

const initialState: IInitialState = {
  hourlyList: [],
  detailWeatherInfo: {
    feels_like: 0,
    pressure: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    wind_speed: 0,
    humidity: 0,
    weather: {
      description: '',
      icon: '',
      id: 0,
    },
  },
  city: '',
  loading: false,
  error: null,
}

const weatherSlice = createSlice({
  name: 'hourlyWeather',
  initialState: initialState,
  reducers: {
    chosenCity: (state: IInitialState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [fetchHourlyWeatherAction.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchHourlyWeatherAction.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.hourlyList = action.payload.hourly.map((element: IPayload, index: number) => ({
        time: `${new Date(element.dt * 1000).getUTCHours()}:00`,
        temp: element.temp,
      })).slice(0,24);
      state.detailWeatherInfo = {
        feels_like: action.payload.current.feels_like,
        pressure: action.payload.current.pressure,
        humidity: action.payload.current.humidity,
        sunrise: action.payload.current.sunrise,
        sunset: action.payload.current.sunset,
        temp: action.payload.current.temp,
        wind_speed: action.payload.current.wind_speed,
        weather: {
          description: action.payload.current.weather[0].description,
          icon: action.payload.current.weather[0].icon,
          id: action.payload.current.weather[0].id,
        },
      };
      state.loading = false;
      state.error = null;
    },
    [fetchHourlyWeatherAction.rejected.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

export const { reducer, actions } = weatherSlice;
export const { chosenCity } =actions;
