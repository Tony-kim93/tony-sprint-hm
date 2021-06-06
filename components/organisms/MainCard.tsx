import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MainSingleCard from '../molecules/MainSingleCard';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/RootActions';

const GridMainCard = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto auto auto;
  margin-top: 77px;
`;

export default function MainCard() {
  const { isLoading, mainCardData, order } = useSelector(
    (state: any) => state.MainCard
  );

  const dispatch = useDispatch();
  let pageSet = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 1
      ) {
        pageSet++;
        if (pageSet < 4)
          dispatch(
            actions.getMainCard(`limit=50&page=${pageSet}&order=${order}`)
          );
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, [order]);

  useEffect(() => {
    console.log('aa');
    dispatch(actions.getMainCardOrder(`limit=50&order=${order}`));
  }, [order]);

  return (
    <GridMainCard>
      {mainCardData.MainCard.card?.map((item: any, index: number) => {
        return (
          <div key={item.id}>
            <MainSingleCard
              name={item.name}
              breed={item.breed_group}
              image={item.image}
            />
          </div>
        );
      })}
    </GridMainCard>
  );
}
