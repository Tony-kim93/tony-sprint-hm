import React, { useEffect } from 'react';
import * as actions from '../store/modules/actions';
import { useDispatch } from 'react-redux';

export const useInfinity = (pageSet: number, value: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 1
      ) {
        pageSet++;
        if (pageSet < 4)
          dispatch(
            actions.getMainCard(`limit=50&page=${pageSet}&order=${value}`)
          );
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [value]);

  useEffect(() => {
    dispatch(actions.getMainCardOrder(`limit=50&order=${value}`));
  }, [value]);
};
