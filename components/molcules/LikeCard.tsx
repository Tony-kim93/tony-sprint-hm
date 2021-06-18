import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Img from '../atoms/Img';
import * as TYPE from '../../interface/index';
//3개를 하나로 합쳐볼수있다.
//고민]

interface dataProps {
  data: TYPE.likeItem;
}
export default function LikeCard({ data }: dataProps) {
  console.log(data);
  return (
    <>
      <Img src={data.url} alt="data" width={100} height={100} />
      <Paragraph text={`${data.id}`} />
      <Paragraph text={`Name:${data.breeds[0].name}`} />
      <Paragraph text={`Breed:${data.breeds[0].breed_group}`} />
    </>
  );
}
