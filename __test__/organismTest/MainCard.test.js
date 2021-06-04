import React from 'react';
import { render } from '@testing-library/react';
import MainCard from '../../components/organisms/MainCard';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

describe('<MainSingleCard molecules test', () => {
  const getStoreData = [
    { id: 1, breed: 'Test' },
    { id: 2, breed: 'Test2' }
  ];
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ getStoreData }));

  it('MainCard is rendered?', () => {
    const { getByText } = render(<MainCard />);
    expect(dispatch).toBeCalled();
    expect(getByText(/TEST DOG/i)).not.toBeNull();
  });
});
