import { IRootState } from "../rootType";

export const coordinateSelector = (state: IRootState) => state.detailWeather.coord;
export const detailWeatherSelector = (state: IRootState) => state.detailWeather;
