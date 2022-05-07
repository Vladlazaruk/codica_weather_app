import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY } from '../../constants/api-key';
import { BASE_URL } from '../../constants/url';

export const fetchDetailyWeatherAction = createAsyncThunk(
  "detailWeather/fetch",
  async (id: string, thunkAPI) => {
    const result = await fetch(`${BASE_URL}data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`)
      .then((data) => data.json())
      .catch(error => {
         throw new Error(error);
      });
    return result;
  }
);
