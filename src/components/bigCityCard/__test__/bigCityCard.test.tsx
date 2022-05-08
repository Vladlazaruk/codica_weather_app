import React from 'react';
import { BigCityCard } from '../bigCityCard';
import { render, screen } from '@testing-library/react';

const mockData = {
  id: 0,
  description: 'some info',
  icon: '',
};

describe('render BigCityCard component', () => {
  it('component dispaled on the page with right data', () => {
    render(
      <BigCityCard
        weather={mockData}
        temp={12}
        wind_speed={1}
        feels_like={12}
        pressure={1000}
        humidity={34}
        temp_min={5}
        temp_max={15}
        name='test'
      />
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByTestId('temp')).toHaveTextContent('12');
  });
});
