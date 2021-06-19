import React from 'react';
import * as S from '../../styles/globalStyles';

interface ButtonProps {
  name: string;
  onClick?: any;
  // onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: string;
  style?: any;
}

export default function Button({ name, onClick, type }: ButtonProps) {
  return (
    <S.MainEngineButton type={type} onClick={onClick}>
      {name}
    </S.MainEngineButton>
  );
}
