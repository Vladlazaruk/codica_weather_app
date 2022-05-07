import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { BigCityCard } from '../../components/bigCityCard/bigCityCard';
import store from '../../redux/store';
import { Chart } from '../../components/chart/chart';
import { IRootState } from '../../redux/rootType';
import { useParams } from 'react-router-dom';
import { fetchDetailyWeatherAction } from '../../redux/detailWeather/detailWeatherApi';
import { fetchHourlyWeatherAction } from '../../redux/weatherHourly/weatherHourlyApi';
import { hourlyListSelector } from '../../redux/weatherHourly/weatherHourlySelector';
import { coordinateSelector, detailWeatherSelector } from '../../redux/detailWeather/detailWeatherSelector';
import styles from './detailInfo.module.scss';

const cx = classNames.bind(styles);

export const DetailInfo = ()  => {
    const dispatch: typeof store.dispatch = useDispatch();
    
    const hourlyListTemp = useSelector(hourlyListSelector);
    const coordinate = useSelector(coordinateSelector);
    
    const { id } = useParams();
    const {
      weather,
      temp,
      wind_speed,
      feels_like,
      pressure,
      humidity,
      temp_min,
      temp_max,
      name,
    } = useSelector(detailWeatherSelector);
   
    useEffect(() => {
      dispatch(fetchHourlyWeatherAction(coordinate));
      id && dispatch(fetchDetailyWeatherAction(id));
    }, [id, coordinate]);

  return (
    <div className={cx('container')}>
      <div className={cx('chart')}>
        <BigCityCard
          name={name}
          weather={weather}
          temp={temp}
          wind_speed={wind_speed}
          feels_like={feels_like}
          pressure={pressure}
          humidity={humidity}
          temp_min={temp_min}
          temp_max={temp_max}
        />
        <Chart data={hourlyListTemp} />
      </div>
    </div>
  );
};
