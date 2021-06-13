import React from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';
import styled from 'styled-components';
import { ItemType } from '../organisms/CardGrid';

interface CardProps {
  item: ItemType;
}

export default function Card({ item }: CardProps) {
  return (
    <CardBox>
      <Img src={item.image.url} alt="test" width={100} height={100} />
      <Paragraph text={`breed:${item.breed_group}`} />
      <Paragraph text={`name:${item.name}`} />
    </CardBox>
  );
}

const CardBox = styled.div`
  width: 120px;
`;
