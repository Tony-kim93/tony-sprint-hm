import React, { useState } from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';
import { ItemType } from '../../interface/index';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import Toggle from '../molcules/Toggle';

interface CardProps {
  item: ItemType;
}

export default function Card({ item }: CardProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [enjoyId, setEnjoyId] = useState<any>('');

  const sendEnjoy = (e: any) => {
    e.preventDefault();
    setToggle(!toggle);
    API.sendFavourites({ image_id: item.image.id, sub_id: 'test4' }).then(
      (result) => {
        if (result.status === 200) {
          setEnjoyId(result.data.id);
        }
      }
    );
  };

  const sendCancelEnjoy = (e: any) => {
    e.preventDefault();
    setToggle(!toggle);
    API.deleteFavourites(`${enjoyId}`);
  };
  return (
    <S.CardWrapper>
      <Img src={item.image.url} alt="test" width={100} height={100} />
      <Paragraph text={`breed:${item.breed_group}`} />
      <Paragraph text={`name:${item.name}`} />
      <Toggle
        src1={'/yellowstar.png'}
        src2={'/star.png'}
        toggle={toggle}
        sendCancel={sendCancelEnjoy}
        sendEnroll={sendEnjoy}
      />
    </S.CardWrapper>
  );
}
