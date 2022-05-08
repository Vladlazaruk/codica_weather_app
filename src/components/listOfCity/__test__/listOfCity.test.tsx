import React from 'react';
import { ListOfCity } from '../listOfCity';
import { render, screen, waitFor } from '../../../utils/test-utils';

const mockData = ['Kyiv', 'Kharkiv', 'Chernihiv'];

describe('render ListOfCity component', () => {
  it('ListOfCity displayed on the page, and have the right length', () => {
    render(
      <ListOfCity citiesList={mockData}/>
    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
    waitFor(() => {
      expect(screen.getAllByTestId('listItem')).toHaveLength(3);
    });
  });
});
