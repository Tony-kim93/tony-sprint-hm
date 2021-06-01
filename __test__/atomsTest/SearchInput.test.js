import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../../components/atoms/SearchInput';

describe('<SearchInput atom test>', () => {
  const { getByPlaceholderText } = render(<SearchInput />);

  it('is SearchInput is render?', () => {
    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
