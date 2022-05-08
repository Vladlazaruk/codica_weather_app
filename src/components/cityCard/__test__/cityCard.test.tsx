import React from 'react';
import { CityCard } from '../cityCard';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, waitFor } from '../../../utils/test-utils';
import store from '../../../redux/store';

const mockCityName = 'Kyiv';

const mockInitialState = {
  weatherData: {
    weather: {
      'Kiev': {
        id: 1,
        main: {
          temp: 10,
        },
        cod: 200,
        name: 'Kiev',
        weatherId: 800,
        description: 'clear cky',
        icon: '10n',
      },
    },
  },
};

describe('render CityCard component', () => {
    const mockStore = configureStore();
    let store,wrapper

    it('CityCard displayed on the page',  () => {
      store = mockStore(mockInitialState)
      render(<CityCard cityName={mockCityName}/>);
      waitFor(() => {
        expect(screen.getByTestId('cardContainer')).toBeInTheDocument();
      })
    });
});
