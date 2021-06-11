import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from '../../../styles/globalStyles';

export default function likeBtn({
  isValue,
  sendLikeVote,
  sendUnLikeVote
}: any) {
  return (
    <S.MainEngineButton likeBtn>
      {isValue ? (
        <Image
          onClick={sendUnLikeVote}
          src="/redheart.png"
          alt="test"
          width={15}
          height={15}
        />
      ) : (
        <Image
          onClick={sendLikeVote}
          src="/heart.png"
          alt="test2"
          width={15}
          height={15}
        />
      )}
    </S.MainEngineButton>
  );
}
