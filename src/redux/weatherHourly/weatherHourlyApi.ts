import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY } from '../../constants/api-key';
import { BASE_URL } from '../../constants/url';
import { ICoordinates } from './type';

export const fetchHourlyWeatherAction = createAsyncThunk(
  "hourlyWeather/fetch",
  async ({ lat, lon }: ICoordinates, thunkAPI) => {
    const result = await fetch(`${BASE_URL}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      .then((data) => data.json())
      .catch(error => {
        throw new Error(error);
      });
    return result;
  }
);
