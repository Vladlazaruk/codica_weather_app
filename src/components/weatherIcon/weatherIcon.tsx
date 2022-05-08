import React from 'react';
import { IWeatherIconProps } from './type';
import { compareIconId } from '../../utils/compareIconId';

export const WeatherIcon = ({ big, code }: IWeatherIconProps) => {
  const Icon = compareIconId(code);
  return big ? <Icon data-testid='bigIcon' style={{ width: '100px', height: '100px' }} /> : <Icon data-testid='icon' />;
};
