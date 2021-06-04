import React from 'react';
import AscButton from '../atoms/atomButton/AscButton';
import DescButton from '../atoms/atomButton/DescButton';
import styled from 'styled-components';

const MainFilterButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 0 auto;
  margin-top: 30px;
`;

export default function MainPageFilterButton() {
  return (
    <MainFilterButton>
      <AscButton />
      <DescButton />
    </MainFilterButton>
  );
}
