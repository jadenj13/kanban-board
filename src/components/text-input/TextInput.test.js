import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

test('renders TextInput', () => {
  const { getByText } = render(<TextInput />);
  const element = getByText(/TextInput/i);
  expect(element).toBeInTheDocument();
});
