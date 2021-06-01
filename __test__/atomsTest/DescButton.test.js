import React from 'react';
import { render } from '@testing-library/react';
import DescButton from '../../components/atoms/DescButton';

describe('<DescButton atom test>', () => {
  const { getByText } = render(<DescButton />);

  it('is DESC button render?', () => {
    expect(getByText(/desc/i)).toBeInTheDocument();
  });
});
