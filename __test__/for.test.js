import React from 'react';
import ForTest from '../src/component/ForTest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('tony project test', () => {
  expect(true).toBeTruthy();
});

test('is it render', () => {
  const { getByText } = render(<ForTest />);
  expect(getByText('aaaa')).toBeInTheDocument();
});
