import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders Card', () => {
  const { getByText } = render(<Card />);
  const element = getByText(/Card/i);
  expect(element).toBeInTheDocument();
});
