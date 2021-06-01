import React from 'react';
import { render } from '@testing-library/react';
import MainSearchEngine from '../../components/organisms/MainSearchEngine';

describe('<MainSearchEngine atom test>', () => {
  const { getByText, getByPlaceholderText } = render(<MainSearchEngine />);

  it('is DESC button render?', () => {
    expect(getByText(/desc/i)).toBeInTheDocument();
    expect(getByText(/asc/i)).toBeInTheDocument();
    expect(getByText(/search/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
