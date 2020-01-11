import React from 'react';
import { render } from '@testing-library/react';
import SwimLane from './SwimLane';

test('renders SwimLane', () => {
  const { getByText } = render(<SwimLane />);
  const element = getByText(/SwimLane/i);
  expect(element).toBeInTheDocument();
});
