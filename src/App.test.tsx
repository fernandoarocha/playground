import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { feetToCent } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('feetToCent returns the correct value', () => {
  const result = feetToCent(5, 10);

  console.log(result)
  expect(result).toBe('5 feet and 10 inches is equal to 177.80 centimeters');
});
