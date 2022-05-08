import { IInnerWeather } from "../type";

export interface ICoordinates {
  lat?: number | null;
  lon?: number | null;
}

export interface IInitialState {
  hourlyList: IHourlyList[];
  detailWeatherInfo: {
    feels_like: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    wind_speed: number;
    humidity: number;
    weather: IInnerWeather;
  };
  city: string;
  error: string | null;
  loading: boolean;
}

export interface IHourlyList {
  time: string;
  temp: number;
}

export interface IPayload {
  dt: number;
  temp: number;
}
