import React from 'react';
import { WeatherIcon } from '../weatherIcon';
import { render, screen, waitFor } from '@testing-library/react';

describe('render WeatherIcon component', () => {
  it('regular WeatherIcon on the page', () => {
    render(<WeatherIcon code={800} />);
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
  });

  it('big WeatherIcon on the page', () => {
    render(<WeatherIcon big code={800} />);
    expect(screen.queryByTestId('bigIcon')).toBeInTheDocument();
  });
});
