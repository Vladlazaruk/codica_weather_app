import React from 'react';
import classNames from 'classnames/bind';
import { Card, CardContent } from '@mui/material';
import { ReactComponent as Wind } from '../../assets/icons/wind.svg';
import { ReactComponent as Pressure } from '../../assets/icons/pressure.svg';
import { ReactComponent as Humidity } from '../../assets/icons/humidity.svg';
import { ReactComponent as High } from '../../assets/icons/high.svg';
import { ReactComponent as Low } from '../../assets/icons/low.svg';
import { IBigCityCardProps } from './type';
import { WeatherIcon } from '../weatherIcon/weatherIcon';
import styles from './bigCityCard.module.scss';

const cx = classNames.bind(styles);

export const BigCityCard = ({
  weather,
  temp,
  wind_speed,
  feels_like,
  pressure,
  humidity,
  temp_min,
  temp_max,
  name,
}: IBigCityCardProps)  => {
  return (
    <div className={cx('card')}>
      <Card>
        <CardContent>
          <span className={cx('card__title')}>{name}</span>
          <div className={cx('card__content')}>
            <div className={cx('card__content_left')}>
              <WeatherIcon big code={weather.id}/>
              <span data-testid='temp' className={cx('card__content_temp')}>
                {`${Math.round(temp)}°`}
              </span>
            </div>
            <div className={cx('card__content_details')}>
              <span className={cx('card__content_details_item')}>
                <Wind /><span>Wind {wind_speed} kmp</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <Pressure /><span>Pressure: {pressure} hPa</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <Humidity /><span>Humidity: {humidity} %</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <High /><span>{temp_max}°</span>
              </span>
              <span className={cx('card__content_details_item')}>
                <Low /><span>{temp_min}°</span>
              </span>
            </div>
          </div>
            <span className={cx('card__content_descr')}>{weather.description}</span>
            <span className={cx('card__content_descr')}>Feels like {Math.round(feels_like)}°</span>
        </CardContent>
      </Card>
    </div>
  );
};
