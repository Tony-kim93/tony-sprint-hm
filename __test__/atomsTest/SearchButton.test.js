import React from 'react';
import { render } from '@testing-library/react';
import SearchButton from '../../components/atoms/atomButton/SearchButton';

describe('<SearchButton atom test>', () => {
  const { getByText } = render(<SearchButton />);

  it('is search button render?', () => {
    expect(getByText(/search/i)).toBeInTheDocument();
  });
});
