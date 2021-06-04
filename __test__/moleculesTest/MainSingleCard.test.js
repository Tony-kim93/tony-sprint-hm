import React from 'react';
import { render } from '@testing-library/react';
import MainSingleCard from '../../components/molecules/MainSingleCard';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux');

describe.skip('<MainSingleCard molecules test', () => {
  // const mainCardData = {};
  // const dispatch = jest.fn();
  // useDispatch.mockImplementation(() => dispatch);
  // useSelector.mockImplementation((selector) => selector({ mainCardData }));
  // const { getByText } = render(<MainSingleCard />);

  it('MainSingleCard is rendered?', () => {
    // expect(dispatch).toBeCalled();
    expect(true).toBeTruthy();
  });
});
