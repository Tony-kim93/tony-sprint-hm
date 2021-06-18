import React from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';
import * as TYPE from '../../interface/index';

//들어오는 데이터 => 종속적인 느낌의 컴퍼넌트 네이밍 밑 아래코드들
// 예로들면 largeCard같은거? item.breeds[0]? 이런거좀...
//좀만 생각해보자 범용적으로 사용가능한 id같은거?
//일단 likeCard랑 해서 하나로 합쳐질수있네

interface DetailItemProps {
  item: TYPE.DetailProps;
}

export default function DetailCard({ item }: DetailItemProps) {
  console.log(item);
  if (!item) {
    return null;
  }
  return (
    <>
      <Img src={item.url} alt="test" width={350} height={350} />
      <Paragraph text={`breed:${item.breeds[0]?.breed_group}`} />
      <Paragraph text={`name:${item.breeds[0]?.name}`} />
      <Paragraph text={`type:${item.url}`} />
    </>
  );
}
