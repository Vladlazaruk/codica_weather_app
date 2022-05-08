import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherAction } from './weatherApi';
import { IInitialState, IPayload } from '../type';

const initialState: IInitialState = {
  citiesList: [],
  weather: {
    initial: {
      id: null,
      main: {
        temp: 0,
      },
      cod: 0,
      name: '',
      weatherId: null,
      description: '',
      icon: '',
    }
  },
  cod: 0,
  favourites: false,
  name: '',
  loading: false,
  error: null,
}

const weatherSlice = createSlice({
  name: 'weatherData',
  initialState: initialState,
  reducers: {
    initialCitiesList: (state: IInitialState, action: PayloadAction<string[]>) => {
      state.citiesList = Array.from(new Set([...state.citiesList, ...action.payload]));
    },
    addNewCity: (state: IInitialState, action: PayloadAction<string[]>) => {
      state.citiesList = action.payload;
    },
    deleteCity: (state: IInitialState, action: PayloadAction<string>) => {
      state.citiesList = state.citiesList.filter(
        (item) => item.toLocaleLowerCase() !== action.payload.toLocaleLowerCase(),
      );
      state.name = action.payload;
    },
  },
  extraReducers: {
    [fetchWeatherAction.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchWeatherAction.fulfilled.type]: (state, action: PayloadAction<IPayload>) => {
      state.cod = action.payload.cod;
      state.weather = {
        ...state.weather,
        [state.name || action.payload.name]: {
          id: action.payload.id,
          main: action.payload.main,
          description: action.payload.weather[0].description,
          icon: action.payload.weather[0].icon,
          name: action.payload.name,
          weatherId: action.payload.weather[0].id,
          cod: action.payload.cod,
        },
      };
      state.loading = false;
      state.error = null;
    },
    [fetchWeatherAction.rejected.type]: (state) => {
      state.loading = false;
      state.weather = {};
      state.error = 'Fetchig data error';
    },
  },
});

export const { reducer, actions } = weatherSlice;
export const { addNewCity, deleteCity, initialCitiesList } = actions;
