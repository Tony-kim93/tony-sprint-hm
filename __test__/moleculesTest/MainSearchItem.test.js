import React from 'react';
import { render } from '@testing-library/react';
import MainSearchItem from '../../components/molecules/MainSearchItem';

describe('<MainSearchItem molecules test>', () => {
  const { getByText, getByPlaceholderText } = render(<MainSearchItem />);

  it('is SearchInput & SearchButton is render?', () => {
    expect(getByText(/search/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
