import React from 'react';
import { render } from '@testing-library/react';
import AscButton from '../../components/atoms/AscButton';

describe('<AscButton atom test>', () => {
  const { getByText } = render(<AscButton />);

  it('is ASC button render?', () => {
    expect(getByText(/asc/i)).toBeInTheDocument();
  });
});
