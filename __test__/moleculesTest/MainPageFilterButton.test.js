import React from 'react';
import { render } from '@testing-library/react';
import MainPageFilterButton from '../../components/molecules/MainPageFilterButton';

describe('<MainPageFilterButton molecules test', () => {
  const { getByText } = render(<MainPageFilterButton />);

  it('is ASC, DESC button is rendering', () => {
    expect(getByText(/asc/i)).toBeInTheDocument();
    expect(getByText(/desc/i)).toBeInTheDocument();
  });
});
