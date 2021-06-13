import React from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import styled from 'styled-components';
import Link from 'next/link';
export default function DetailCard({ item }: any) {
  return (
    <DetailCardBox>
      {item && (
        <>
          <Img src={item.url} alt="test" width={350} height={350} />
          <Paragraph text={`breed:${item.breeds[0]?.breed_group}`} />
          <Paragraph text={`name:${item.breeds[0]?.name}`} />
          <Paragraph text={`type:${item.url}`} />
        </>
      )}
    </DetailCardBox>
  );
}

const DetailCardBox = styled.div``;
