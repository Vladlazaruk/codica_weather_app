import React from 'react';
import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import { CityCard } from '../cityCard/cityCard';
import { IListOfCityProps } from './type';
import styles from './listOfCity.module.scss';

const cx = classNames.bind(styles);

export const ListOfCity = ({ citiesList }: IListOfCityProps) => (
  <div className={cx('container')}>
    <Grid container justifyContent="center" alignItems="center">
      {citiesList.map((item: string) => (
        <CityCard cityName={item}/>
      ))}
    </Grid>
  </div>
);
