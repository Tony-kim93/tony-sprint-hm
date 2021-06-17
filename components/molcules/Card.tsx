import React, { useState } from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';
import styled from 'styled-components';
import { ItemType } from '../../interface/index';
import axios from '../../libraries/axios/index';
import * as S from '../../styles/globalStyles';

interface CardProps {
  item: ItemType;
}

export default function Card({ item }: CardProps) {
  const [isEnjoy, setIsEnjoy] = useState<boolean>(false);
  const [enjoyId, setEnjoyId] = useState<any>('');

  const sendEnjoy = (e: any) => {
    e.preventDefault();
    setIsEnjoy(!isEnjoy);
    axios
      .post('/favourites', {
        image_id: item.image.id,
        sub_id: 'test3'
      })
      .then((result) => {
        if (result.status === 200) {
          setEnjoyId(result.data.id);
        }
      });
  };

  const sendCancelEnjoy = (e: any) => {
    e.preventDefault();
    setIsEnjoy(!isEnjoy);
    axios.delete(`/favourites/${enjoyId}`).then((res) => console.log(res));
  };
  return (
    <S.CardWrapper>
      <Img src={item.image.url} alt="test" width={100} height={100} />
      <Paragraph text={`breed:${item.breed_group}`} />
      <Paragraph text={`name:${item.name}`} />
      {isEnjoy ? (
        <Img
          className="hoverImg"
          onClick={sendCancelEnjoy}
          src="/yellowstar.png"
          alt="star"
          width={15}
          height={15}
        />
      ) : (
        <Img
          className="hoverImg"
          onClick={sendEnjoy}
          src="/star.png"
          alt="star"
          width={15}
          height={15}
        />
      )}
    </S.CardWrapper>
  );
}
