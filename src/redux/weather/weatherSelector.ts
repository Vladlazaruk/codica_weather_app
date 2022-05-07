import { IRootState } from "../rootType";

export const smallCardWeatherSelector = (state: IRootState) => state.weatherData.weather;
export const smallCardListOfCitySelector = (state: IRootState) => state.weatherData.citiesList;
export const statusCodeSelector = (state: IRootState) => state.weatherData.cod;
