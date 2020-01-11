import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('renders Board', () => {
  const { getByText } = render(<Board />);
  const element = getByText(/Board/i);
  expect(element).toBeInTheDocument();
});
