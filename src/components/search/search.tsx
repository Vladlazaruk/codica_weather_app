import React from 'react';
import classNames from 'classnames/bind';
import { Button, TextField } from '@mui/material';
import { ISearchProps } from './type';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

export const Search = ({ onChange, value, onClick, status }: ISearchProps) => (
  <div className={cx('container')}>
    <TextField
      className={cx('search')}
      label={status === 404 ? 'city not found' : 'type in english'}
      type='search'
      value={value}
      onChange={onChange}
    />
    <Button
      className={cx('search__btn')}
      variant="contained"
      onClick={onClick}>
        ADD NEW CITY
    </Button>
  </div>
);
