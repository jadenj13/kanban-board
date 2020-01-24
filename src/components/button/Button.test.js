import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders Button', () => {
  const { getByText } = render(<Button />);
  const element = getByText(/Button/i);
  expect(element).toBeInTheDocument();
});
