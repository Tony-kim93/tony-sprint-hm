import React from 'react';
import Header from '../../components/organisms/Header';
import { render } from '@testing-library/react';

describe('<HEADER>', () => {
  it('test header is rendered', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Profile/i)).toBeInTheDocument();
    expect(getByText(/dog/i)).toBeInTheDocument();
    expect(getByText(/register/i)).toBeInTheDocument();
  });
});
