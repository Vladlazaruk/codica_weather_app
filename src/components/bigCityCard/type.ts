import { IInnerWeather } from '../../redux/type';

export interface IBigCityCardProps {
  name: string;
  feels_like: number;
  pressure: number;
  temp_max: number;
  temp_min: number;
  temp: number;
  wind_speed: number;
  humidity: number;
  weather: IInnerWeather;
}
