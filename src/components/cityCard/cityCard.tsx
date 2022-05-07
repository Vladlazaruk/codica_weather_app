import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Button, Card, CardContent, CardMedia, IconButton, Typography, Grid } from '@mui/material';
import store from '../../redux/store';
import { IRootState } from '../../redux/rootType';
import { fetchWeatherAction } from '../../redux/weather/weatherApi';
import { deleteCity } from '../../redux/weather/weatherSlice';
import { removeItemFromStorage } from '../../utils/localStorage';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh.svg';
import { ICityCardProps } from './type';
import { BASE_URL } from '../../constants/url';
import { fetchHourlyWeatherAction } from '../../redux/weatherHourly/weatherHourlyApi';
import { chosenCity } from '../../redux/weatherHourly/waetherHourlySlice';
import { findCityFromList } from '../../utils/cityCardUtil';
import WeatherIcon from '../weatherIcon/weatherIcon';
import {smallCardListOfCitySelector, smallCardWeatherSelector } from '../../redux/weather/weatherSelector';
import styles from './cityCard.module.scss';

const cx = classNames.bind(styles);

export const CityCard = ({ cityName }: ICityCardProps) => {
  const dispatch: typeof store.dispatch = useDispatch();

  const weatherData = useSelector(smallCardWeatherSelector);
  const listOfCity = useSelector(smallCardListOfCitySelector);
  
  const {
    cod,
    icon,
    main,
    id,
    description,
    name,
    weatherId
  } = weatherData && findCityFromList(cityName, weatherData);
  
  const onDelete = () => {
    dispatch(deleteCity(cityName));
    const result = listOfCity.filter((city) => city !== cityName);
    removeItemFromStorage(result);
  };

  const onRefresh = () => dispatch(fetchWeatherAction(cityName));

  useEffect(() => {
    dispatch(fetchWeatherAction(cityName));
  }, []);

  return (
    <Grid item>
      {cod === 200 && (
        <Card variant="outlined" className={cx('card__wrapper')}>
          <CardContent className={cx('card__content')}>
            <Typography className={cx('card__title')} component={"span"}>
              {name}
            </Typography>
            <WeatherIcon code={weatherId}/>
            <Typography className={cx('card__content_temp')} component={"span"}>
              {`${Math.round(main.temp)}°`}
            </Typography>
            <div>{description}</div>
          </CardContent>
            <div className={cx('card__content_btns')}>
              <Link style={{textDecoration: 'none'}} to={`/city/${id}`} >
                <Button>
                  MORE
                </Button>
              </Link>
              <IconButton aria-label="delete" onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={onRefresh}>
                <RefreshIcon />
              </IconButton>
            </div>
        </Card>
      )}
    </Grid>
  );
};
