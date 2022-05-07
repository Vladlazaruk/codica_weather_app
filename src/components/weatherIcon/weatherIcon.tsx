import React from 'react';
import { IWeatherIconProps } from './type';
import { compareIconId } from '../../utils/compareIconId';
import { ReactComponent as CloudyIcon } from '../../assets/icons/weather/cloudy.svg';
import { ReactComponent as HazeIcon } from '../../assets/icons/weather//haze.svg';
import { ReactComponent as HeavyRainIcon } from '../../assets/icons/weather/heavy-rain.svg';
import { ReactComponent as PartlyCloudyIcon } from '../../assets/icons/weather/partly-cloudy.svg';
import { ReactComponent as RainIcon } from '../../assets/icons/weather/rain.svg';
import { ReactComponent as SleetIcon } from '../../assets/icons/weather/sleet.svg';
import { ReactComponent as SnowIcon } from '../../assets/icons/weather/snow.svg';
import { ReactComponent as SunnyIcon } from '../../assets/icons/weather/sunny.svg';
import { ReactComponent as ThunderstormIcon } from '../../assets/icons/weather/thunderstorm.svg';

const WeatherIcon = ({ big, code }: IWeatherIconProps) => {
  const Icon = compareIconId(code);
  return big ? <Icon style={{ width: '100px', height: '100px' }} /> : <Icon />;
};

export default WeatherIcon;
