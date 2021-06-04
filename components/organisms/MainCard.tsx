import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/RootActions';
import styled from 'styled-components';
import MainSingleCard from '../molecules/MainSingleCard';

const GridMainCard = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto auto auto;
  margin-top: 77px;
`;

export default function MainCard() {
  const dispatch = useDispatch();
  const getStoreData = useSelector((state: any) => state.MainCard.mainCardData);
  useEffect(() => {
    dispatch(actions.getMainCard(''));
  }, []);
  const CardData = getStoreData.card;
  return (
    <GridMainCard>
      {CardData?.data.map((item: any) => {
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
