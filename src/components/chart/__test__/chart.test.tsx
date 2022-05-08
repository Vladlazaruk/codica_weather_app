import React from 'react';
import { Chart } from '../chart';
import { render, screen, waitFor } from '@testing-library/react';

const mockData = [
  { time: "10:00", temp: 19.25 },
  { time: "11:00", temp: 20.25 },
  { time: "12:00", temp: 21.25 },
]

describe('render Chart component', () => {
  it('chart container and chart line displayed on the page', () => {
    render(
      <Chart data={mockData}/>
    );
    expect(screen.getByTestId('chartContainer')).toBeInTheDocument();
    waitFor(() =>
      expect(screen.queryByTestId('chartLine')).toBeInTheDocument(),
    );
  });
});
