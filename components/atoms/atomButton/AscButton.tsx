import React from 'react';
import * as S from '../../../styles/globalStyles';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/RootActions';

export default function AscButton() {
  const dispatch = useDispatch();
  const handleAsc = () => {
    // dispatch(actions.getMainCard('limit=50&order=ASC'));
    dispatch(actions.changeOrder('ASC'));
  };

  return (
    <S.MainEngineButton filterBtn onClick={handleAsc}>
      ASC
    </S.MainEngineButton>
  );
}
