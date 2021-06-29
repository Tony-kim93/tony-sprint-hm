import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/atoms/Button';

describe('<BUTTON>', () => {
  it('test every button', () => {
    const name = 'text';
    const onClick = jest.fn();
    const { getByText } = render(<Button name={name} onClick={onClick} />);
    expect(getByText('text')).toBeInTheDocument();
    expect(getByText('text')).toMatchSnapshot();
    fireEvent.click(getByText('text'));
    expect(onClick.mock.calls.length).toBe(1);
  });
});
