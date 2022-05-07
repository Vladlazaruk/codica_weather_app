import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY } from '../../constants/api-key';
import { BASE_URL } from '../../constants/url';

export const fetchWeatherAction = createAsyncThunk(
    "weatherData/fetch",
    async (payload: string, thunkAPI) => {
      const result = await fetch(`${BASE_URL}data/2.5/weather?q=${payload}&appid=${API_KEY}&units=metric`)
        .then((data) => data.json())
        .catch(error => {
          throw new Error(error);
        });
      return result;
    }
);
