import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../../components/atoms/Loading';

describe('<Loading atom test>', () => {
  const { getByText } = render(<Loading />);

  it('is Loading component is render?', () => {
    expect(getByText(/로딩중/i)).toBeInTheDocument();
  });
});
