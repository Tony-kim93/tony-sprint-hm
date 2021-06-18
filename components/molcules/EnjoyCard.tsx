import React from 'react';
import Img from '../atoms/Img';
import * as S from '../../styles/globalStyles';
import * as TYPE from '../../interface/index';

interface enjoyProps {
  enjoy: [TYPE.enjoyItem];
}

export default function EnjoyCard({ enjoy }: enjoyProps) {
  console.log(enjoy);
  return (
    <S.GridLikeCard>
      {enjoy &&
        enjoy.map((item: any) => (
          <div key={item.id}>
            <Img src={item.image.url} alt="test" width={100} height={100} />
          </div>
        ))}
    </S.GridLikeCard>
  );
}
