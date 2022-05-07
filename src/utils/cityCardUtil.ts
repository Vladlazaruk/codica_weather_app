import { IWeather } from '../redux/type';

export const findCityFromList = (cityName: string, data: IWeather) => {
  const cityArr = Object.values(data);
  const searchedCity = cityArr.filter((city) => city.name.toLocaleLowerCase() === cityName.toLocaleLowerCase());
  return {...searchedCity[0]};
};
