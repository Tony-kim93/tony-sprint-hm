import React from 'react';
import * as S from '../../../styles/globalStyles';

export default function SearchButton({ searchById }: any) {
  return (
    <S.MainEngineButton searchBtn onClick={searchById}>
      Search
    </S.MainEngineButton>
  );
}
