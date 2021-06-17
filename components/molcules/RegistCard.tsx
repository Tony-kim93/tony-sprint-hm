import React from 'react';
import Img from '../atoms/Img';

export default function RegistCard({ regist }: any) {
  return (
    <>
      <Img src={regist[0].url} alt="test" width={100} height={100} />
    </>
  );
}
