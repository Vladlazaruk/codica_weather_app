import React from 'react';
import classNames from 'classnames/bind';
import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { IChartProps } from './type';
import styles from './chart.module.scss';

const cx = classNames.bind(styles);

export const Chart = ({ data }: IChartProps) => (
  <Card className={cx('chart')}>
    <LineChart
      width={450}
      height={200}
      data={data}
      syncId="anyId"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
    </LineChart>
  </Card>
);
