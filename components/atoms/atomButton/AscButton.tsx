import React from 'react';
import * as S from '../../../styles/globalStyles';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/RootActions';

export default function AscButton() {
  const dispatch = useDispatch();
  const handleAsc = () => {
    dispatch(actions.getMainCard('&order=ASC'));
  };

  return (
    <S.MainEngineButton filterBtn onClick={handleAsc}>
      ASC
    </S.MainEngineButton>
  );
}
