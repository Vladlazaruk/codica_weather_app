import { IInnerWeather } from "../type";

export interface IInitialState {
  name: string;
  feels_like: number;
  pressure: number;
  temp_max: number;
  temp_min: number;
  temp: number;
  wind_speed: number;
  humidity: number;
  coord: {
    lon: number | null;
    lat: number | null;
  };
  weather: IInnerWeather;
  error: string | null;
  loading: boolean;
}
