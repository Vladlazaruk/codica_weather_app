import React from 'react';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import { CityCard } from '../cityCard/cityCard';
import { IListOfCityProps } from './type';
import styles from './listOfCity.module.scss';

const cx = classNames.bind(styles);

export const ListOfCity = ({ citiesList }: IListOfCityProps) => (
  <div data-testid='list' className={cx('container')}>
    <Grid container justifyContent="center" alignItems="center">
      {citiesList.map((item: string) => (
        <CityCard
          key={uuidv4()}
          data-testid='listItem'
          cityName={item}/>
      ))}
    </Grid>
  </div>
);
