export interface IMain {
  [key: string]: number;
}

export interface IInnerWeather {
  description: string;
  icon: string;
  id: number | null;
}

export interface IPayload {
  base: string;
  clouds: {all: number};
  coord: {lon: number; lat: number;};
  dt: number;
  id: number;
  cod: number;
  main: IMain;
  name: string;
  sys: {country: string; sunrise: number; sunset: number;}
  timezone: number;
  visibility: number;
  weather: IInnerWeather[];
  wind: {speed: number; deg: number; gust: number;}
}

export interface IWeather {
  [key: string]: {
    id: number | null;
    main: IMain;
    cod: number;
    description: string;
    icon: string;
    weatherId: number | null;
    name: string;
  }
}

export interface IInitialState {
  citiesList: string[];
  weather: IWeather;
  favourites: boolean;
  name: string;
  loading: boolean;
  error: null | string,
  cod: number;
}
