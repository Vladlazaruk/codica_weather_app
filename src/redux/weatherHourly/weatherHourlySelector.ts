import { IRootState } from "../rootType";

export const hourlyListSelector = (state: IRootState) => state.hourlyWeather.hourlyList;
