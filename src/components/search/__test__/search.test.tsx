import React from 'react';
import { Search } from '../search';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockChangeFn = jest.fn();
const mockClickFn = jest.fn();
const mockValue = '';
const mockStatus = 200;

describe('render Search component', () => {
  it('check onChange function and input value', () => {
    render(
      <Search
        status={mockStatus}
        value={mockValue}
        onChange={mockChangeFn}
        onClick={mockClickFn}
      />
    );
    waitFor(() => {
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('');
      userEvent.type(input, 'test');
      expect(mockChangeFn).toHaveBeenCalledTimes(4);
      expect(input).toHaveValue('test');
  });
});

  it('check onClick function and button', () => {
    render(
      <Search
        status={mockStatus}
        value={mockValue}
        onChange={mockChangeFn}
        onClick={mockClickFn}
      />
    );
    waitFor(() => {
      const btn = screen.getByTestId('searchBtn');
      userEvent.click(btn);
      expect(mockClickFn).toHaveBeenCalled();
    });
  });
});
