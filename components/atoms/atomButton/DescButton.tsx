import React from 'react';
import * as S from '../../../styles/globalStyles';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/modules/RootActions';

export default function AscButton() {
  const dispatch = useDispatch();
  const handleDesc = () => {
    // dispatch(actions.getMainCard('limit=50&order=DESC'));
    dispatch(actions.changeOrder('DESC'));
  };
  return (
    <S.MainEngineButton filterBtn onClick={handleDesc}>
      DESC
    </S.MainEngineButton>
  );
}
